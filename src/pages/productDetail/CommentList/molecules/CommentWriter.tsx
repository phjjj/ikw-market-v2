import styled from "styled-components";
import { ReactNode } from "react";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";

interface Props {
  children: ReactNode;
}
function CommentWriter({ children }: Props) {
  return <CommentWriterContainer>{children}</CommentWriterContainer>;
}
const CommentWriterContainer = styled.div`
  display: flex;
  margin-top: 1.2rem;
  align-items: center;
  gap: 3px;

  height: 60px;
  /* box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px; */
`;
CommentWriter.TextArea = TextArea;
CommentWriter.Button = Button;

export default CommentWriter;
