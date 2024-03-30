import styled from "styled-components";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

type ImageType = {
  src: string;
};
function Image({ src }: ImageType) {
  return (
    <ImageWrapper>
      <MdOutlineArrowBackIosNew size={30} />
      <ImageContainer src={src} />
      <MdOutlineArrowForwardIos size={30} />
    </ImageWrapper>
  );
}
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  svg {
    cursor: pointer;
  }
`;
const ImageContainer = styled.img`
  width: 674px;
  height: 674px;
  border-radius: 10px;
  object-fit: cover;
`;
export default Image;
