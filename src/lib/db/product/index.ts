import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { dbService, storageService } from "../../../firebase/config";
import { IProductData } from "../../../types";

export async function uploadProductImgFile(
  fileList: File[],
): Promise<string[]> {
  const images: string[] = [];
  if (fileList.length > 0) {
    try {
      // eslint-disable-next-line no-restricted-syntax
      for (const file of fileList) {
        const locationRef = ref(storageService, `products/${uuidv4()}`);
        const result = await uploadBytes(locationRef, file);
        const productImgUrl = await getDownloadURL(result.ref);
        images.push(productImgUrl);
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
export async function uploadProduct(product: IProductData) {
  try {
    const productDocument = await addDoc(collection(dbService, "products"), {
      ...product,
    });

    const productDocumentRef = doc(dbService, "products", productDocument.id);

    await updateDoc(productDocumentRef, {
      id: productDocument.id,
      createdAt: Date.now(),
    });
  } catch (error) {
    console.log(error);
  }
}
