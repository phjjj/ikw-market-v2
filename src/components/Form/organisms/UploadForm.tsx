import styled from "styled-components";
import { ReactNode } from "react";
import UploadImage from "../molecule/UploadImage";
import UploadInput from "../atoms/Input/UploadInput";
import UploadTextarea from "../atoms/textarea/UploadTextarea";
import DefaultButton from "../../common/atoms/Button/DefaultButton";

interface Props {
  children: ReactNode;
}

const UploadFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000;
`;

function UploadForm({ children }: Props) {
  // eslint-disable-next-line consistent-return
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!fileList.length) return alert("이미지가 없어요");
  // };
  return <UploadFormLayout>{children}</UploadFormLayout>;
}

UploadForm.Image = UploadImage;
UploadForm.Input = UploadInput;
UploadForm.Textarea = UploadTextarea;
UploadForm.Button = DefaultButton;

export default UploadForm;
