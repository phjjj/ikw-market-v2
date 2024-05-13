import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../../firebase/config";

// 유저 이름 가져오기
export async function getUserName(userId: string): Promise<string> {
  const userDocRef = doc(dbService, "users", userId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    const userData = userDocSnapshot.data();
    return userData.name;
  }
  throw new Error(`사용자를 찾을 수 없습니다. 사용자 ID: ${userId}`);
}

// 상품 댓글 목록 가져오기
export async function getProductCommentList(
  commentListId: string,
): Promise<[]> {
  try {
    const commentDocRef = doc(dbService, "commentList", commentListId);
    const commentDocSnapshot = await getDoc(commentDocRef);

    if (commentDocSnapshot.exists()) {
      const commentListData = commentDocSnapshot.data();
      const { comments } = commentListData;
      return comments || [];
    }
    throw new Error(
      `댓글 목록을 찾을 수 없습니다. 댓글 목록 ID: ${commentListId}`,
    );
  } catch (error) {
    throw new Error(`댓글 목록을 가져오는 중 에러 발생: ${error}`);
  }
}
