// CommentList.tsx
import styled from "styled-components";
import CommentInfo from "./molecules/CommentInfo";
import CommentWriter from "./molecules/CommentWriter";
import { IComments } from "../../../types/comment";

interface Props {
  commentData: IComments[];
  onSubmitComment: (text: string) => void;
  userId: string;
  handleDeleteComment: (commentId: string) => void;
}

function CommentList({
  commentData,
  onSubmitComment,
  userId,
  handleDeleteComment,
}: Props) {
  return (
    <CommentListContainer>
      <div>
        <h3>댓글</h3>
      </div>
      {commentData.map((comment) => (
        <CommentInfo key={comment.id}>
          <CommentInfo.UserImage image={comment.userImage} />
          <div>
            <CommentInfo.UserName body={comment.userName} />
            <CommentInfo.Text body={comment.text} />
            <CommentInfo.Date body={comment.createdAt} />
            {comment.userId === userId && (
              <CommentInfo.DeleteButton
                onClick={() => handleDeleteComment(comment.id)}
              />
            )}
          </div>
        </CommentInfo>
      ))}
      <CommentWriter onSubmit={onSubmitComment} />
    </CommentListContainer>
  );
}

const CommentListContainer = styled.div`
  width: 100%;
  padding: 0.3rem;
`;

export default CommentList;
