import styled from "styled-components";
import Image from "./atoms/Image";
import ProductInfo from "./molecules/ProductInfo";
import UserName from "./atoms/UserName";

function ProductDetail() {
  const DUMMY_USER_DATA = {
    image:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202210/17/img_20221017153113_ca91465f.webp",
    name: "카리나",
    products: [
      {
        id: 1,
        image: [
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
          "https://cdnweb01.wikitree.co.kr/webdata/editor/202210/17/img_20221017153113_ca91465f.webp",
        ],
        title: "사진기",
        price: 100000,
        location: "2호관",
        description:
          "사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사사진기팝니다.사진기팝니다.사",
      },
    ],
  };
  return (
    <ProductDetailContainer>
      <Image src={DUMMY_USER_DATA.products[0].image[0]} />
      <UserName body={DUMMY_USER_DATA.name} />
      <hr style={{ width: "100%", margin: "0" }} />
      <ProductInfo>
        <ProductInfo.Title body={DUMMY_USER_DATA.products[0].title} />
        <ProductInfo.Price body={DUMMY_USER_DATA.products[0].price} />
        <ProductInfo.Location body={DUMMY_USER_DATA.products[0].location} />
        <ProductInfo.Description
          body={DUMMY_USER_DATA.products[0].description}
        />
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
