import styled from "styled-components";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import ProductList from "../../components/ProductList";
import Title from "../../components/common/atoms/Title";
import { allProductsAtom } from "../../recoil/user";
import { getAllProducts } from "../../lib/db/product";

function HomePage() {
  const [allProducts, setAllProducts] = useRecoilState(allProductsAtom);

  useEffect(() => {
    async function fetchData() {
      const allProductsData = await getAllProducts();
      setAllProducts(allProductsData);
    }
    fetchData();
  }, [setAllProducts]);

  return (
    <HomePageWrapper>
      <Title className="xl">최근 중고거래 매물</Title>
      <ProductList productData={allProducts} />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
