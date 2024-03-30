import styled from "styled-components";

type ImageType = {
  src: string;
};
function Image({ src }: ImageType) {
  return <ImageContainer src={src} />;
}

const ImageContainer = styled.img`
  width: 199px;
  height: 184px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  cursor: pointer;
`;

export default Image;
