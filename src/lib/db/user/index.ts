import {
  addDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "../../../firebase/config";
import { IUser } from "../../../types/user";
import { makeDocRef } from "../product/util";

export async function checkUser(kakaoId: number): Promise<IUser | null> {
  const userQuery = query(
    collection(dbService, "users"),
    where("kakaoId", "==", kakaoId),
  );
  const userSnapshot = await getDocs(userQuery);

  if (userSnapshot.empty) {
    return null;
  }

  const userDoc = userSnapshot.docs[0];
  const userData = userDoc.data() as IUser;
  return userData;
}

// 회원등록
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

// thorw err 발생시킨다 -> recoilSeletor에서 haserr 상태 업데이트 -> 굿
// 유저 정보
export async function getUserDoc(identifier: string): Promise<IUser> {
  try {
    const condition = query(
      collection(dbService, "users"),
      where("id", "==", identifier),
    );

    const userSnapshot = await getDocs(condition);
    const userDocs = userSnapshot.docs.map((userDoc) => userDoc.data());

    if (userDocs.length > 0) {
      const user = userDocs[0] as IUser;
      return user;
    }
    throw new Error(`유저 정보를 찾을 수 없습니다.${identifier}`);
  } catch (error) {
    throw new Error(`Error retrieving user document: ${error}`);
  }
}

// 유저(프로필) 업데이트
export async function updateUser(userId: string, name: string) {
  const productDocumentRef = makeDocRef("users", userId);
  try {
    await updateDoc(productDocumentRef, { name });
  } catch (error) {
    console.log("Firestore 상품 업데이트 통신 에러 : ", error);
  }
}
