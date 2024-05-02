import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  doc,
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
