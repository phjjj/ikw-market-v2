// CommentWriter.tsx
import styled from "styled-components";
import { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
  userId: string;
}

function CommentWriter({ onSubmit, userId }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onSubmit(text);
      setText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (e.nativeEvent.isComposing) return;
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <CommentWriterContainer onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={
          userId
            ? "댓글을 입력해주세요."
            : "로그인 후 댓글을 작성할 수 있습니다."
        }
        onKeyDown={handleKeyDown}
        disabled={!userId}
      />
      <Button type="submit" disabled={!userId}>
        등록
      </Button>
    </CommentWriterContainer>
  );
}

const CommentWriterContainer = styled.form`
  display: flex;
  margin-top: 1.2rem;
  align-items: center;
  gap: 3px;
  height: 60px;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  padding: 0;
  border: 0;
`;

const Button = styled.button`
  width: 65px;
  border: none;
  height: 100%;
  cursor: pointer;
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;

export default CommentWriter;
