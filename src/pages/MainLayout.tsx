import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";

function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "64px" }}>
        <Outlet />
      </main>
      <ProductCard>
        <ProductCard.Image src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" />
        <ProductCard.Info>
          <ProductCard.Title body="사진기" />
          <ProductCard.Price body="100,000원" />
          <ProductCard.Location body="2호관" />
        </ProductCard.Info>
      </ProductCard>
    </>
  );
}

export default MainLayout;
