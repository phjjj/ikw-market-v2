import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "../firebase/config";
import { IUser } from "../types";

export async function checkUser(kakaoId: number) {
  const userDocs = await getDocs(collection(dbService, "users"));
  let checkUserObj;

  try {
    userDocs.forEach((userDoc) => {
      const user = userDoc.data();
      if (user.kakaoId === kakaoId) {
        checkUserObj = user;
        throw new Error("Is User");
      }
    });
  } catch (error) {
    console.log(error);
  }
  return checkUserObj;
}

export async function userAddDoc(userObj: IUser) {
  const checkUserObj = await checkUser(userObj.kakaoId);

  if (!checkUserObj) {
    const user: IUser = {
      ...userObj,
      createdAt: Date.now(),
    };

    const userDocument = await addDoc(collection(dbService, "users"), user);
    const userDocumentRef = doc(dbService, "users", userDocument.id);

    await updateDoc(userDocumentRef, {
      id: userDocument.id,
    });

    user.id = userDocument.id;
    return user;
  }
  return checkUserObj;
}
