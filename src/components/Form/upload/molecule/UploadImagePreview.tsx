import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import ProductImage from "../../../common/atoms/ProductImage";

type Props = {
  image: string;
  onDelete: () => void;
};

function UploadImagePreview({ image, onDelete }: Props) {
  return (
    <UploadImagesContainer>
      <ProductImage className="sm" src={image} />
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
