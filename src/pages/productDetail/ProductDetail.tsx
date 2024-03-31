import styled from "styled-components";

import ProductInfo from "./molecules/ProductInfo";
import UserName from "./atoms/UserName";
import Image from "./atoms/Image";

function ProductDetail() {
  const DUMMY_PRODUCT_DATA = {
    id: 1,
    images: [
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202210/17/img_20221017153113_ca91465f.webp",
    ],
    title: "사진기",
    price: 100000,
    location: "2호관",
    description:
      "사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사",
    name: "카리나",
  };
  // TODO 블로그쓰기
  return (
    <ProductDetailContainer>
      <Image images={DUMMY_PRODUCT_DATA.images} />
      <UserName body={DUMMY_PRODUCT_DATA.name} />
      <hr style={{ width: "100%", margin: "0" }} />
      <ProductInfo>
        <ProductInfo.Title body={DUMMY_PRODUCT_DATA.title} />
        <ProductInfo.Price body={DUMMY_PRODUCT_DATA.price} />
        <ProductInfo.Location body={DUMMY_PRODUCT_DATA.location} />
        <ProductInfo.Description body={DUMMY_PRODUCT_DATA.description} />
      </ProductInfo>
    </ProductDetailContainer>
  );
}

const ProductDetailContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  align-items: center;
  max-width: 674px;
  margin: 0 auto;
  padding-bottom: 10rem;
`;
export default ProductDetail;
