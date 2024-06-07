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
import NameEditForm from "./molecules/NameEditForm";
import { updateUser } from "../../lib/db/user";

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
  const [isEditingProfile, setIsEditingProfile] = useState(false); // 프로필 수정 중인지 여부를 추적

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

  // 이름 수정 완료 시 호출되는 함수.
  const handleNameEditComplete = async (newName: string) => {
    // 프로필 수정 DB 요청...
    await updateUser(user.id, newName);
    setUser((prevUser) => ({ ...prevUser, name: newName }));
    setIsEditingProfile(false); // 프로필 수정 모드 종료
  };

  return (
    <ProfilePageContainer>
      <UserInfoContainer>
        <UserInfo>
          <UserInfo.Image src={user.image} />
          {isEditingProfile ? (
            <NameEditForm
              onNameEditComplete={handleNameEditComplete}
              initialName={user.name}
            />
          ) : (
            <>
              <UserNameText>{user.name}</UserNameText>
              <EditProfileButton onClick={() => setIsEditingProfile(true)}>
                프로필 수정
              </EditProfileButton>
            </>
          )}
        </UserInfo>
      </UserInfoContainer>
      <hr style={{ width: "100%" }} />
      <Title className="lg">내가 올린 물건</Title>
      <ProductList productData={products} />
    </ProfilePageContainer>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserNameText = styled.span`
  padding: 5px;
  font-size: 2rem;

  margin-bottom: 10px; /* 수정 전 후 간격 조정 */
`;

const EditProfileButton = styled.button`
  background-color: transparent;
  font-size: 1.5rem;

  border: none;
  color: #007bff;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #007bff;
  }
`;
const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProfilePage;
