import styled from "styled-components";
import { ReactNode } from "react";
import UploadImageList from "../molecule/UploadImageList";
import UploadInput from "../atoms/Input/UploadInput";
import UploadTextarea from "../atoms/textarea/UploadTextarea";
import DefaultButton from "../../../common/atoms/Button/DefaultButton";

interface Props {
  children: ReactNode;
}

function UploadForm({ children }: Props) {
  return <UploadFormLayout>{children}</UploadFormLayout>;
}

const UploadFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #000;
`;

UploadForm.ImageList = UploadImageList;
UploadForm.Input = UploadInput;
UploadForm.Textarea = UploadTextarea;
UploadForm.Button = DefaultButton;

export default UploadForm;
