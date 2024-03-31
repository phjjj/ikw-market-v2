import styled from "styled-components";

type UserNameType = {
  body: string;
};
function UserName({ body }: UserNameType) {
  return (
    <UserNameWrapper>
      <span>{body}</span>
    </UserNameWrapper>
  );
}
const UserNameWrapper = styled.div`
  font-weight: bold;
  margin-bottom: 0.23rem;
`;
export default UserName;
