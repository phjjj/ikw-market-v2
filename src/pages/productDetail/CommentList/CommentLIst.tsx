// CommentList.tsx
import styled from "styled-components";
import CommentInfo from "./molecules/CommentInfo";
import CommentWriter from "./molecules/CommentWriter";
import { IComments } from "../../../types/comment";

interface Props {
  commentData: IComments[];
  onSubmitComment: (text: string) => void;
}

function CommentList({ commentData, onSubmitComment }: Props) {
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
