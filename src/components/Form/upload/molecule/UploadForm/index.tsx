import styled from "styled-components";

import UploadImageList from "../UploadImageList";
import UploadInput from "../../atoms/Input/UploadInput";
import UploadTextarea from "../../atoms/textarea/UploadTextarea";
import DefaultButton from "../../../../common/atoms/Button/DefaultButton";
import { ReactChildrenProps } from "../../../../../types";

function UploadForm({ children }: ReactChildrenProps) {
  return <UploadFormContainer>{children}</UploadFormContainer>;
}

const UploadFormContainer = styled.form`
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
