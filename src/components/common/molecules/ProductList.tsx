import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard/ProductCard";

interface IProductData {
  id: number;
  image: string;
  title: string;
  price: number;
  location: string;
}

function ProductList({ productData }: { productData: IProductData[] }) {
  return (
    <ProductListWrapper>
      {productData.map((product) => (
        <ProductCard key={product.id}>
          <Link to={`products/${product.id}`}>
            <ProductCard.Image src={product.image} />
          </Link>
          <ProductCard.Info>
            <ProductCard.Name body={product.title} />
            <ProductCard.Price body={product.price} />
            <ProductCard.Location body={product.location} />
          </ProductCard.Info>
        </ProductCard>
      ))}
    </ProductListWrapper>
  );
}

const ProductListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 최대 3열로 설정합니다. */
  gap: 2.6rem;
  padding: 0;
  justify-content: center;

  @media (max-width: 768px) {
    /* 화면 폭이 768px 이하일 때 */
    grid-template-columns: repeat(2, 1fr); /* 최대 2열로 설정합니다. */
  }

  @media (max-width: 480px) {
    /* 화면 폭이 480px 이하일 때 */
    grid-template-columns: 1fr; /* 1열로 설정합니다. */
  }
`;

export default ProductList;
