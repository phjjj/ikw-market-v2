import { ReactNode } from "react";
import styled from "styled-components";
import Image from "../atoms/Image";
import Name from "../atoms/Name";
import ModifyButton from "../atoms/ModifyButton";

interface Props {
  children: ReactNode;
}

function UserInfo({ children }: Props) {
  return <UserInfoContainer>{children}</UserInfoContainer>;
}

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rem;
  width: 100%;
`;

UserInfo.Image = Image;
UserInfo.Name = Name;
UserInfo.ModifyButton = ModifyButton;
export default UserInfo;
