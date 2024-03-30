import styled from "styled-components";

type ImageType = {
  src: string;
};
function Image({ src }: ImageType) {
  return <ImageContainer src={src} />;
}
const ImageContainer = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  object-fit: cover;
`;
export default Image;