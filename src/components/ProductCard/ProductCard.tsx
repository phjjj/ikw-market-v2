import { ReactNode } from "react";
import styled from "styled-components";
import Info from "./molecules/Info";
import Price from "./atoms/Price";
import Name from "./atoms/Name";
import Location from "./atoms/Location";
import ProductImage from "../common/atoms/ProductImage";

interface Props {
  children: ReactNode;
}

function ProductCard({ children }: Props) {
  return <ProductCardContainer>{children}</ProductCardContainer>;
}

const ProductCardContainer = styled.li`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  list-style: none;
`;

ProductCard.Image = ProductImage;
ProductCard.Info = Info;
ProductCard.Name = Name;
ProductCard.Price = Price;
ProductCard.Location = Location;
export default ProductCard;
