import {
  BaseImageWrapper,
  LargeImageWrapper,
  SmallImageWrapper,
} from "./index.style";

interface IProductImage {
  src: string;
  className: string;
}
function ProductImage({ className, src }: IProductImage) {
  switch (className) {
    case "sm":
      return <SmallImageWrapper src={src} />;
    case "lg":
      return <LargeImageWrapper src={src} />;
    default:
      return <BaseImageWrapper src={src} />;
  }
}

export default ProductImage;
