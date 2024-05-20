// ProductDetail.tsx
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductInfo from "./ProductInfo/ProductInfo";
import UserName from "./UserName/UserName";
import Image from "./ProductInfo/molecules/ImageSlide";
import CommentList from "./CommentList/CommentLIst";
import { getProduct } from "../../lib/db/product";
import { allProductsAtom, userIdAtom } from "../../recoil/user";
import { deleteComment, submitComment } from "../../lib/db/commentList";
import { IProductData } from "../../types/product";

function ProductDetail() {
  const allProducts = useRecoilValue(allProductsAtom);
  const [product, setProduct] = useState<IProductData | null>(null);

  // isUserItem: 사용자가 작성한 상품인지 확인하는 상태
  const [isUserItem, setIsUserItem] = useState(false);
  console.log(`내가 올린 상품 인가? ${isUserItem}`);
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

  useEffect(() => {
    if (product && product?.userId === userId) {
      setIsUserItem(true);
    }
  }, [product, userId]);

  const handleSubmitComment = (text: string) => {
    submitComment(productId, text, userId);
  };

  const handleDeleteComment = (commentId: string) => {
    if (!product) {
      return;
    }
    deleteComment(commentId, product?.commentListId);
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

          <CommentList
            userId={userId}
            commentData={product.comments ? product.comments.comments : []}
            onSubmitComment={handleSubmitComment}
            handleDeleteComment={handleDeleteComment}
          />
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
  align-items: center;
  max-width: 674px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export default ProductDetail;
