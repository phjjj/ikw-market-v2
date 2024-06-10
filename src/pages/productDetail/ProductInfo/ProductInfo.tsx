import styled from "styled-components";
import { ReactNode } from "react";
import Name from "./atoms/Name";
import Price from "./atoms/Price";
import Location from "./atoms/Location";
import Description from "./atoms/Description";

interface Props {
  children: ReactNode;
}

function ProductInfo({ children }: Props) {
  return <ProductInfoContainer>{children}</ProductInfoContainer>;
}
const ProductInfoContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  padding: 2rem 0px;
`;

ProductInfo.Name = Name;
ProductInfo.Price = Price;
ProductInfo.Location = Location;
ProductInfo.Description = Description;

export default ProductInfo;
