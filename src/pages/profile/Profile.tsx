import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import UserInfo from "./molecules/UserInfo";
import ProductList from "../../components/ProductList";
import Title from "../../components/common/atoms/Title";
import { userSelector } from "../../recoil/user";
import { getUserProducts } from "../../lib/db/product";
import { IProductData } from "../../types/product";
import { IUser } from "../../types/user";

function ProfilePage() {
  const userSelectorLoadable = useRecoilValueLoadable(userSelector);
  const [products, setProducts] = useState<IProductData[]>([]);
  const [user, setUser] = useState<IUser>({
    id: "",
    name: "",
    kakaoId: 0,
    image: "",
    createdAt: 0,
  });

  useEffect(() => {
    async function fetchData() {
      if (userSelectorLoadable.state === "hasValue") {
        const userData = userSelectorLoadable.contents;
        setUser(userData);

        // 유저 데이터가 유효한 경우에만 상품 데이터를 가져옴
        if (userData.id) {
          const userProducts = await getUserProducts(userData.id);
          setProducts(userProducts);
        }
      }
    }
    fetchData();
  }, [userSelectorLoadable]);

  return (
    <ProfilePageContainer>
      <UserInfo>
        <UserInfo.Image src={user.image} />
        <UserInfo.Name body={user.name} />
        <UserInfo.ModifyButton />
      </UserInfo>
      <hr style={{ width: "100%" }} />
      <Title className="lg">내가 올린 물건</Title>
      <ProductList productData={products} />
    </ProfilePageContainer>
  );
}
const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ProfilePage;
