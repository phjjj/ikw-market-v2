import styled from "styled-components";

type UserImageType = {
  image: string;
};
function UserImage({ image }: UserImageType) {
  return (
    <UserImageWrapper>
      <img src={image} alt="" />
    </UserImageWrapper>
  );
}
const UserImageWrapper = styled.div`
  img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
  }
`;
export default UserImage;
