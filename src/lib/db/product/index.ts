import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storageService } from "../../../firebase/config";

// eslint-disable-next-line consistent-return
export function uploadProductImgFile(fileList: File[]): string[] | void {
  const images: void | string[] = [];
  if (fileList.length > 0) {
    fileList.forEach(async (file) => {
      try {
        const locationRef = ref(storageService, `products/${uuidv4()}`);
        const result = await uploadBytes(locationRef, file);
        const productImgUrl = await getDownloadURL(result.ref);
        images.push(productImgUrl);
      } catch (error) {
        console.log("파일 업로드 에러 : ", error);
      }
    });
    return images;
  }
}
