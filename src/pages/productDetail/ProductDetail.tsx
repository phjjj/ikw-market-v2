// ProductDetail.tsx
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import UserName from "./UserName/UserName";
import Image from "./ProductInfo/molecules/ImageSlide";
import CommentList from "./CommentList/CommentLIst";
import { deleteProduct, getProduct, updateProduct } from "../../lib/db/product";
import { allProductsAtom, userIdAtom } from "../../recoil/user";
import { submitComment } from "../../lib/db/commentList";
import { IProductData } from "../../types/product";
import DefaultButton from "../../components/common/atoms/Button/DefaultButton";
import FlexContainer from "../../components/common/molecular/Container/FlexContainer";
import { LargeTitleWrapper } from "../../components/common/atoms/Title/index.style";

function ProductDetail() {
  const allProducts = useRecoilValue(allProductsAtom);
  const [product, setProduct] = useState<IProductData | null>(null);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const userId = useRecoilValue(userIdAtom);
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

  const handleSubmitComment = (text: string) => {
    submitComment(productId, text, userId);
    console.log("댓글 제출:", text);
  };

  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  const updateBtnClickHandler = () => {
    redirect("update");
  };

  const deleteBtnClickHandler = async () => {
    try {
      await deleteProduct(productId, userId);
      redirect("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 판매 완료 버튼 핸들러
  const completeSaleHandler = async () => {
    if (!product || !product.id) {
      alert("Product data is incomplete.");
      return;
    }
    try {
      await updateProduct(productId, { ...product, isSale: false });
      redirect("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

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

          {product.isSale ? (
            <FlexContainer>
              <DefaultButton onClick={updateBtnClickHandler}>
                수정
              </DefaultButton>
              <DefaultButton onClick={deleteBtnClickHandler}>
                삭제
              </DefaultButton>
              <DefaultButton onClick={completeSaleHandler}>
                판매완료
              </DefaultButton>
            </FlexContainer>
          ) : (
            <LargeTitleWrapper>판매완료</LargeTitleWrapper>
          )}

          <CommentList
            commentData={product.comments ? product.comments.comments : []}
            onSubmitComment={handleSubmitComment}
          />
        </>
      )}
    </ProductDetailWrapper>
  );
}

const ProductDetailWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 674px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export default ProductDetail;
