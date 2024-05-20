import {
  DocumentData,
  DocumentReference,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { v4 } from "uuid";
import { dbService } from "../../../firebase/config";
import { ICommentList } from "../../../types/comment";

// 댓글 문서 추가
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

// 댓글 작성
export async function submitComment(
  productId: string,
  text: string,
  userId: string,
) {
  try {
    // productId에 해당하는 댓글 리스트 컬렉션을 쿼리합니다.
    const commentListQuery = query(
      collection(dbService, "commentList"),
      where("productId", "==", productId),
    );

    // 댓글 리스트 컬렉션의 문서를 가져옵니다.
    const commentListDocs = await getDocs(commentListQuery);
    if (commentListDocs.empty) {
      console.error(
        `productId가 ${productId}인 댓글 리스트를 찾을 수 없습니다.`,
      );
      return;
    }

    // 댓글 리스트 컬렉션의 첫 번째 문서를 가져옵니다.
    const commentListDoc = commentListDocs.docs[0];
    const commentListData = commentListDoc.data();

    // 현재 댓글 배열을 가져옵니다.
    const comments = commentListData.comments || [];

    // 새로운 댓글을 추가합니다.
    const newComment = {
      userId,
      text,
      createdAt: Timestamp.now(), // 현재 시간을 사용하여 Timestamp 생성
      id: v4(),
    };
    comments.push(newComment);

    // 댓글 리스트 문서를 업데이트합니다.
    await updateDoc(commentListDoc.ref, { comments });
  } catch (error) {
    console.error("댓글 추가 중 에러 발생:", error);
  }
}

// 댓글 삭제

export async function deleteComment(commentId: string, commentListId: string) {
  try {
    // 댓글 리스트 컬렉션의 문서를 가져옵니다.
    const commentListQuery = query(
      collection(dbService, "commentList"),
      where("id", "==", commentListId),
    );
    const commentListDocs = await getDocs(commentListQuery);
    if (commentListDocs.empty) {
      console.error(
        `commentListId가 ${commentListId}인 댓글 리스트를 찾을 수 없습니다.`,
      );
    }
    const commentListDoc = commentListDocs.docs[0];
    const commentListData = commentListDoc.data();
    // 현재 댓글 배열을 가져옵니다.
    const { comments } = commentListData;

    // 댓글 리스트에서 삭제할 댓글을 제외합니다.
    const newComments = comments.filter(
      (comment: { id: string }) => comment.id !== commentId,
    );
    // 댓글 리스트 문서를 업데이트합니다.
    await updateDoc(commentListDoc.ref, { comments: newComments });
    console.log("댓글 삭제 성공");
  } catch (error) {
    console.error("댓글 삭제 중 에러 발생:", error);
  }
}
