import styled from "styled-components";
import CommentInfo from "./molecules/CommentInfo";
import CommentWriter from "./molecules/CommentWriter";

interface ICommentData {
  username: string;
  userImage: string;
  text: string;
  date: string;
}
function CommentList({ commentData }: { commentData: ICommentData[] }) {
  return (
    <CommentListContainer>
      <div>
        <h3>댓글</h3>
      </div>
      {commentData.map((comment) => (
        <CommentInfo key={comment.username}>
          <CommentInfo.UserImage image={comment.userImage} />
          <div>
            <CommentInfo.UserName body={comment.username} />
            <CommentInfo.Text body={comment.text} />
            <CommentInfo.Date body={comment.date} />
          </div>
        </CommentInfo>
      ))}
      <CommentWriter>
        <CommentWriter.TextArea />
        <CommentWriter.Button />
      </CommentWriter>
    </CommentListContainer>
  );
}

const CommentListContainer = styled.div`
  width: 100%;
  padding: 0.3rem;
`;

export default CommentList;
