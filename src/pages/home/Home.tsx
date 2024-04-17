import styled from "styled-components";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import ProductList from "../../components/ProductList";
import Title from "../../components/common/atoms/Title";
import { dbService } from "../../firebase/config";
import { IProductData } from "../../types";

function HomePage() {

  const { state: user } = useLocation();

  const [products, setProducts] = useState<IProductData[]>([]);

  console.log(user);
  // 실시간 업데이트 snapshot을 사용 할 경우 단점을 생각했을 때,
  // 상품이 많을 경우 HomePage 컴포넌트가 리렌더링이 자주 일어남

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(dbService, "products"),
      (snapshot) => {
        console.log("렌더링");
        const productsData = snapshot.docs.map((doc) => doc.data());
        setProducts(productsData as IProductData[]);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <HomePageWrapper>
      <Title className="xl">최근 중고거래 매물</Title>
      <ProductList productData={products} />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
