import styled from "styled-components";
import { ReactNode } from "react";
import UserImage from "../atoms/UserImage";
import UserName from "../atoms/UserName";
import Text from "../atoms/Text";
import Date from "../atoms/Date";
import DeleteButton from "../atoms/DeleteButton";

interface Props {
  children: ReactNode;
}
function CommentInfo({ children }: Props) {
  return <CommentInfoContainer>{children}</CommentInfoContainer>;
}

const CommentInfoContainer = styled.div`
  position: relative;
  display: flex;
  font-size: 14px;
  gap: 10px;
  margin-top: 25px;
`;

CommentInfo.UserImage = UserImage;
CommentInfo.UserName = UserName;
CommentInfo.Text = Text;
CommentInfo.Date = Date;
CommentInfo.DeleteButton = DeleteButton;

export default CommentInfo;
