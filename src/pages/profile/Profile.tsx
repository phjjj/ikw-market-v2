import styled from "styled-components";
import UserInfo from "./molecules/UserInfo";
// import ProductList from "./molecules/ProductList";

function ProfilePage() {
  // const DUMMY_PRODUCTS
  const DUMMY_USER_DATA = {
    image:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202210/17/img_20221017153113_ca91465f.webp",
    name: "카리나",
    products: [
      {
        id: 1,
        image:
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        title: "사진기",
        price: 100000,
        location: "2호관",
      },
      {
        id: 2,
        image:
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        title: "사진기",
        price: 100000,
        location: "2호관",
      },
      {
        id: 3,
        image:
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        title: "사진기",
        price: 100000,
        location: "2호관",
      },
      {
        id: 4,
        image:
          "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        title: "사진기",
        price: 100000,
        location: "2호관",
      },
    ],
  };
  return (
    <ProfilePageWrapper>
      <UserInfo>
        <UserInfo.Image src={DUMMY_USER_DATA.image} />
        <UserInfo.Name body={DUMMY_USER_DATA.name} />
        <UserInfo.ModifyButton />
      </UserInfo>
      <h2>내가 올린 물건</h2>
      {/* <ProductList productData={DUMMY_USER_DATA.products} /> */}
    </ProfilePageWrapper>
  );
}
const ProfilePageWrapper = styled.div``;
export default ProfilePage;
