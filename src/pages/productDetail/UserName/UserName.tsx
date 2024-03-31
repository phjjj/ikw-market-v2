import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

type UserNameType = {
  body: string;
};
function UserName({ body }: UserNameType) {
  return (
    <UserNameWrapper>
      <CgProfile size={30} />
      <span>{body}</span>
    </UserNameWrapper>
  );
}
const UserNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 0px;
`;
export default UserName;
