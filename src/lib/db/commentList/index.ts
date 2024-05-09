import {
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ICommentList } from "../../../types";
import { dbService } from "../../../firebase/config";

export async function createCommentList(data: ICommentList) {
  let commentDocument: DocumentReference<DocumentData, DocumentData> | null =
    null;

  try {
    commentDocument = await addDoc(collection(dbService, "commentList"), data);
  } catch (error) {
    console.log("commentList 컬렉션, 문서 생성 요청 에러 : ", error);
  }

  if (commentDocument) {
    const commentDocumentRef = doc(
      dbService,
      "commentList",
      commentDocument.id,
    );

    try {
      await updateDoc(commentDocumentRef, {
        id: commentDocument.id,
      });
    } catch (error) {
      console.log("해당 commentList 문서 수정 요청 에러 : ", error);
    }
  }

  return commentDocument ? commentDocument.id : null;
}
