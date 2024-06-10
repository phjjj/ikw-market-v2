import styled from "styled-components";

type ImageType = {
  src: string | null;
};
function Image({ src }: ImageType) {
  return <ImageWrapper src={src} />;
}
const ImageWrapper = styled.img<ImageType>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  object-fit: cover;
`;
export default Image;
