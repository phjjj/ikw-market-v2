import styled from "styled-components";
import Title from "./atoms/Title";
import ProductList from "../../components/common/molecules/ProductList";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기1",
    price: 100000,
    location: "2호관",
  },
  {
    id: 2,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기2",
    price: 100000,
    location: "2호관",
  },
  {
    id: 3,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기3",
    price: 100000,
    location: "2호관",
  },
  {
    id: 3,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기3",
    price: 100000,
    location: "2호관",
  },
  {
    id: 3,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기3",
    price: 100000,
    location: "2호관",
  },
  {
    id: 3,
    image:
      "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    title: "사진기3",
    price: 100000,
    location: "2호관",
  },
];

function HomePage() {
  return (
    <HomePageWrapper>
      <Title />
      <ProductList productData={DUMMY_PRODUCTS} />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
