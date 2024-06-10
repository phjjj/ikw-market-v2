import { ReactNode } from "react";
import styled from "styled-components";
import Info from "./molecules/Info";
import Price from "./atoms/Price";
import Name from "./atoms/Name";
import Location from "./atoms/Location";
import ProductImage from "../common/atoms/ProductImage";

interface Props {
  children: ReactNode;
  isSale: boolean;
}

function ProductCard({ children, isSale }: Props) {
  return (
    <ProductCardContainer $isSale={isSale}>{children}</ProductCardContainer>
  );
}

const ProductCardContainer = styled.li<{ $isSale?: boolean }>(
  ({ $isSale }) => ({
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "10px",
    listStyle: "none",
    backgroundColor: $isSale ? "transparent" : "rgba(0, 0, 0, 0.5)",
    color: $isSale ? "#000000" : "#FFFFFF",
  }),
);

ProductCard.Image = ProductImage;
ProductCard.Info = Info;
ProductCard.Name = Name;
ProductCard.Price = Price;
ProductCard.Location = Location;
export default ProductCard;
