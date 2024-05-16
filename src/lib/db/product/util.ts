import { doc, getDoc } from "firebase/firestore";
import { dbService } from "../../../firebase/config";
import { ICommentList, IComments, IUser } from "../../../types";

// 유저 정보 가져오기
export async function getUser(userId: string): Promise<IUser> {
  const userDocRef = doc(dbService, "users", userId);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    const userData = userDocSnapshot.data();
    return userData as IUser;
  }
  throw new Error(`사용자를 찾을 수 없습니다. 사용자 ID: ${userId}`);
}

// 상품 댓글 목록 가져오기
export async function getProductCommentList(commentListId: string) {
  try {
    const commentDocRef = doc(dbService, "commentList", commentListId);
    const commentDocSnapshot = await getDoc(commentDocRef);

    if (commentDocSnapshot.exists()) {
      const commentListData = commentDocSnapshot.data();
      const { comments } = commentListData;
      const formattedComments: IComments[] = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const comment of comments) {
        const timestamp = comment.createdAt;
        const date = timestamp.toDate();
        const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}. ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

        const user = await getUser(comment.userId);
        formattedComments.push({
          ...comment,
          createdAt: formattedDate,
          userImage: user.image,
          userName: user.name,
        });
      }
      commentListData.comments = formattedComments;

      return commentListData as ICommentList;
    }

    throw new Error(
      `댓글 목록을 찾을 수 없습니다. 댓글 목록 ID: ${commentListId}`,
    );
  } catch (error) {
    throw new Error(`댓글 목록을 가져오는 중 에러 발생: ${error}`);
  }
}
