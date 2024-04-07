import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useState } from "react";
import ProductImage from "../../../../components/common/atoms/ProductImage";

type ImageType = {
  images: string[];
};

function Image({ images }: ImageType) {
  const [visibel, setVisibel] = useState(0);

  const onClickNextImage = () =>
    setVisibel((prev) =>
      prev === images.length - 1 ? images.length - 1 : prev + 1,
    );

  const onClickPrevImage = () =>
    setVisibel((prev) => (prev === 0 ? 0 : prev - 1));

  return (
    <ImageContainer>
      <MdOutlineArrowBackIosNew onClick={onClickPrevImage} size={30} />
      {images.map((image, idx) =>
        idx === visibel ? (
          <ProductImage className="lg" key={image} src={image} />
        ) : null,
      )}
      <MdOutlineArrowForwardIos onClick={onClickNextImage} size={30} />
    </ImageContainer>
  );
}
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    cursor: pointer;
  }
`;

export default Image;
