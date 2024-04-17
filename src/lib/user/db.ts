import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "../../firebase/config";
import { IUser } from "../../types";

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

export async function getUserDoc(
  identifier: string | number,
): Promise<IUser | object> {
  let condition;
  // identifier은 user 문서의 id로 올 경우.
  if (typeof identifier === "string") {
    condition = query(
      collection(dbService, "users"),
      where("id", "==", identifier),
    );
  } else {
    // identifier은 kakaoId 인 경우.
    condition = query(
      collection(dbService, "users"),
      where("kakaoId", "==", identifier),
    );
  }

  const userSnapshot = await getDocs(condition);

  let user: IUser | object = {};

  userSnapshot.forEach((userDoc) => {
    user = userDoc.data();
  });

  return user;
}
