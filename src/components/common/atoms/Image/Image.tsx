import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
};

type StyleProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: string;
  cursor?: string;
  flex?: string;
  margin?: string;
  mediaQuery?: {
    width?: string;
    height?: string;
  };
};

function Image({ src, alt }: Props) {
  return <ImageLayout src={src} alt={alt} />;
}

const ImageLayout = styled.img<StyleProps>`
  flex: 0 0 auto;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export default Image;
