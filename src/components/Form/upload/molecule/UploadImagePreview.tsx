import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import Image from "../../../common/atoms/Image/Image";

type Props = {
  image: string;
  onDelete: () => void;
};

function UploadImagePreview({ image, onDelete }: Props) {
  return (
    <UploadImagesContainer>
      <Image src={image} alt="업로드 한 이미지" />
      <TiDelete onClick={() => onDelete()} fill="fill" size={35} />
    </UploadImagesContainer>
  );
}

const UploadImagesContainer = styled.div`
  position: relative;
  margin-right: 10px;
  svg {
    cursor: pointer;
    position: absolute;
    top: -14px;
    right: -13px;
  }
`;

export default UploadImagePreview;
