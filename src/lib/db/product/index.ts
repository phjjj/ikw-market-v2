import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { dbService, storageService } from "../../../firebase/config";
import { IFileList, IProductData } from "../../../types";

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

    await updateDoc(productDocumentRef, {
      id: productDocument.id,
      createdAt: Date.now(),
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
} // Make sure to import IProductData

export async function getProduct(productId: string): Promise<IProductData> {
  const condition = query(
    collection(dbService, "products"),
    where("id", "==", productId),
  );
  let productsSnapshot: QuerySnapshot<DocumentData, DocumentData> | undefined;
  try {
    productsSnapshot = await getDocs(condition);
  } catch (error) {
    console.log("Firestorage Read Product Document Error!");
  }

  let product: IProductData = {
    // Initialize with default values or ensure the object structure matches IProductData
    title: "",
    description: "",
    price: 0,
    location: "",
    images: [],
    // Add other properties as needed
  };

  productsSnapshot?.forEach((productDoc) => {
    product = productDoc.data() as IProductData; // Cast to IProductData
  });

  return product;
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
    const { userId } = productData;
    const userDocRef = doc(dbService, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);
    // 유저 이름 등록
    // 처음부터 업로드 할 때, 유저 이름을 등록해버리면 나중에 유저가 이름을 변경할 경우 상품 정보에는 유저의 이름이 변경되지 않음
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const { name } = userData;
      productData.userName = name;
    }
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
    const { userId } = productData;
    const userDocRef = doc(dbService, "users", userId);
    const userDocSnapshot = await getDoc(userDocRef);
    // 유저 정보 가져오기
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const { name } = userData;
      // 상품에 유저 이름 등록
      productData.userName = name;
    }

    return productData;
  }
  throw new Error("상품을 찾을 수 없습니다.");
}
