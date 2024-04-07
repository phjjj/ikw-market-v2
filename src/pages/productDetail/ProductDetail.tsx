import styled from "styled-components";

import ProductInfo from "./ProductInfo/ProductInfo";
import UserName from "./UserName/UserName";
import Image from "./ProductInfo/molecules/ImageSlide";
import CommentList from "./CommentList/CommentLIst";

function ProductDetail() {
  const DUMMY_PRODUCT_DATA = {
    productId: 1,
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
    userId: 2,
    comment: [
      {
        username: "윈터",
        userId: 1,
        userImage:
          "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2024/02/20/ebb2c0d9-290d-4505-9d6e-5ee7ea2eec2c.jpg",
        text: "구매원합니다",
        date: "2024.03.31. 09:00",
      },
      {
        username: "카리나",
        userId: 2,
        userImage:
          "https://cdnweb01.wikitree.co.kr/webdata/editor/202210/17/img_20221017153113_ca91465f.webp",
        text: "연락주세요",
        date: "2024.03.31. 09:00",
      },
    ],
    like: 10,
  };

  return (
    <ProductDetailWrapper>
      <Image images={DUMMY_PRODUCT_DATA.images} />
      <UserName body={DUMMY_PRODUCT_DATA.name} />
      <hr style={{ width: "100%", margin: "0" }} />
      <ProductInfo>
        <ProductInfo.Name body={DUMMY_PRODUCT_DATA.title} />
        <ProductInfo.Price body={DUMMY_PRODUCT_DATA.price} />
        <ProductInfo.Location body={DUMMY_PRODUCT_DATA.location} />
        <ProductInfo.Description body={DUMMY_PRODUCT_DATA.description} />
      </ProductInfo>
      <CommentList commentData={DUMMY_PRODUCT_DATA.comment} />
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
