import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import {
  DocumentData,
  DocumentSnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dbService, storageService } from "../../../firebase/config";
import { IFileList } from "../../../types";
import { getProductCommentList, getUser } from "./util";
import { createCommentList } from "../commentList";
import { IProductData } from "../../../types/product";

async function fileImgUpload(fileList: IFileList[]) {
  const images: IFileList[] = [];

  if (fileList.length > 0) {
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const file of fileList) {
        const locationRef = ref(storageService, `products/${uuidv4()}`);
        if (file.data) {
          const result = await uploadBytes(locationRef, file.data);
          const productImgUrl = await getDownloadURL(result.ref);
          images.push({ url: productImgUrl, ref: locationRef.toString() });
        }
      }
      return images;
    } catch (error) {
      console.log("파일 업로드 에러 : ", error);
      throw error; // 오류를 호출자에게 다시 던집니다.
    }
  } else {
    throw new Error("파일 목록이 비어 있습니다.");
  }
}

export async function uploadProductImgFile(
  fileList: IFileList[],
): Promise<IFileList[]> {
  const images = await fileImgUpload(fileList);

  return images;
}
// 상품 등록 하기
export async function uploadProduct(product: IProductData) {
  try {
    const productDocument = await addDoc(
      collection(dbService, "products"),
      product,
    );

    const productDocumentRef = doc(dbService, "products", productDocument.id);

    // 초기 commentList 컬렉션 생성 및 문서 생성.
    const commentListId = await createCommentList({
      productId: productDocumentRef.id,
      comments: [],
      id: "",
    });

    await updateDoc(productDocumentRef, {
      id: productDocument.id,
      createdAt: Date.now(),
      commentListId,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(productId: string, product: IProductData) {
  const productDocumentRef = doc(dbService, "products", productId);
  try {
    await updateDoc(productDocumentRef, { ...product });
  } catch (error) {
    console.log("Firestore 상품 업데이트 통신 에러 : ", error);
  }
}

export async function deleteProductImageFile(deleteImgRefStr: string[]) {
  // deleteImgRefStr 배열 요소 값 형식은 ["이미지 참조1", "이미지 참조2" ];
  // eslint-disable-next-line no-restricted-syntax
  for (const deleteImgRef of deleteImgRefStr) {
    const imageRef = ref(storageService, deleteImgRef);
    await deleteObject(imageRef);
  }
}

// 유저 상품 목록
export async function getUserProducts(userId: string) {
  const productQuery = query(
    collection(dbService, "products"),
    where("userId", "==", userId),
  );
  const productsSnapshot = await getDocs(productQuery);

  const productsData: IProductData[] = [];
  productsSnapshot.docs.forEach((product) => {
    productsData.push(product.data() as IProductData);
  });

  return productsData;
}

// 전체 상품 조회
export async function getAllProducts() {
  const productQuery = query(collection(dbService, "products"));
  const productsSnapshot = await getDocs(productQuery);
  const productsData: IProductData[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const product of productsSnapshot.docs) {
    const productData = product.data() as IProductData;
    const { userId, commentListId } = productData;

    // 유저 정보 가져오기
    const user = await getUser(userId);
    productData.userName = user.name;

    // 댓글 목록 가져오기
    productData.comments = await getProductCommentList(commentListId);
    productsData.push(productData);
  }

  return productsData;
}

// 상품 상세 조회
export async function getProduct(productId: string) {
  const productDocRef = doc(dbService, "products", productId);
  const productDocSnapshot = await getDoc(productDocRef);

  if (productDocSnapshot.exists()) {
    const productData = productDocSnapshot.data() as IProductData;
    const { userId, commentListId } = productData;

    // 유저 정보 가져오기
    const user = await getUser(userId);
    productData.userName = user.name;
    // 댓글 목록 가져오기
    productData.comments = await getProductCommentList(commentListId);

    return productData;
  }

  throw new Error("상품을 찾을 수 없습니다.");
}

export async function deleteProduct(productId: string, deletingUserId: string) {
  // deletingUserId 인자는 삭제하고자 하는 userId.
  const productDocRef = doc(dbService, "products", productId);

  let productDocSnapshot: DocumentSnapshot<DocumentData, DocumentData>;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productDocSnapshot = await getDoc(productDocRef);
  } catch (_) {
    throw new Error("해당 상품 불러오기 요청 에러");
  }

  if (productDocSnapshot.exists()) {
    const productData = productDocSnapshot.data() as IProductData;
    const { userId, images, commentListId } = productData;

    const imageRefs = images.map((data) => data.ref as string);

    if (deletingUserId === userId) {
      try {
        await deleteDoc(productDocRef);
      } catch (_) {
        throw new Error("해당 상품 삭제 요청 에러 ");
      }
      try {
        if (imageRefs.length > 0) {
          await deleteProductImageFile(imageRefs);
        }
      } catch (_) {
        throw new Error("해당 상품 이미지 삭제 요청 에러");
      }
      try {
        if (commentListId) {
          const commentListDocRef = doc(
            dbService,
            "commentList",
            commentListId,
          );
          await deleteDoc(commentListDocRef);
        }
      } catch (error) {
        throw new Error(`해당 CommentList 문서 삭제 요청 에러 : ${error}`);
      }
    }
  }
}
