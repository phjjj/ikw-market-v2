import styled from "styled-components";

type NameType = {
  body: string;
};
function Name({ body }: NameType) {
  return <NameContainer>{body}</NameContainer>;
}
const NameContainer = styled.h1``;
export default Name;
