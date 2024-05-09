/* eslint-disable react/button-has-type */
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import UserName from "./UserName/UserName";
import Image from "./ProductInfo/molecules/ImageSlide";
// import CommentList from "./CommentList/CommentLIst";

import { IProductData } from "../../types";
import { getProduct } from "../../lib/db/product";
import { allProductsAtom } from "../../recoil/user";

function ProductDetail() {
  const allProducts = useRecoilValue(allProductsAtom);
  // console.log(allProducts);
  const [product, setProduct] = useState<IProductData | null>(null);

  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  useEffect(() => {
    if (allProducts.length) {
      const productData = allProducts.find((p) => p.id === productId);
      if (productData) {
        setProduct(productData);
      }
    } else {
      const fetchData = async () => {
        const productData = await getProduct(productId);
        setProduct(productData);
      };
      fetchData();
    }
  }, [allProducts, productId]);

  // useEffect(() => {
  //   // productsLoadable 값이 유효할 경우, fetch x
  //   if (productsLoadable.state === "hasValue") {
  //     setProduct(productsLoadable.contents);
  //   } else if (productsLoadable.state === "hasError") {
  //     // 값이 없을경우, 새로고침 하거나 링크로 바로 들어 올 경우
  //     const fetchData = async () => {
  //       const productData = await getProduct(productId);
  //       setProduct(productData);
  //     };

  //     fetchData();
  //   }
  // }, [productsLoadable]);

  return (
    <ProductDetailWrapper>
      {!product ? (
        <div>Loading...</div>
      ) : (
        <>
          <Image images={product.images} />
          <UserName body={product.userName || ""} />
          <hr style={{ width: "100%", margin: "0" }} />
          <ProductInfo>
            <ProductInfo.Name body={product.title} />
            <ProductInfo.Price body={product.price} />
            <ProductInfo.Location body={product.location} />
            <ProductInfo.Description body={product.description} />
          </ProductInfo>

          {/* <button
            onClick={async () => {
              if (product?.id) {
                await deleteProduct(product.id, "ZBIqGwPZucIje7LY6aYT");
              } else {
                console.error("Product ID is undefined");
              }
            }}
          >
            삭제하기
          </button> */}

          {/* <CommentList commentData={product.commentList} /> */}
        </>
      )}
    </ProductDetailWrapper>
  );
}

const ProductDetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  align-items: center;
  max-width: 674px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export default ProductDetail;
