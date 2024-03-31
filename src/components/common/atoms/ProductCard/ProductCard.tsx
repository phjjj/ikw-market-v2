import { ReactNode } from "react";
import styled from "styled-components";
import Image from "./atoms/Image";
import Info from "./molecules/Info";
import Price from "./atoms/Price";
import Title from "./atoms/Title";
import Location from "./atoms/Location";

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
  width: 200px;
  list-style: none;
`;

ProductCard.Image = Image;
ProductCard.Info = Info;
ProductCard.Title = Title;
ProductCard.Price = Price;
ProductCard.Location = Location;
export default ProductCard;
