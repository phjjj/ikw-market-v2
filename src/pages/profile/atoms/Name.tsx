import styled from "styled-components";

type NameType = {
  body: string;
};
function Name({ body }: NameType) {
  return <NameWrapper>{body}</NameWrapper>;
}
const NameWrapper = styled.h1``;
export default Name;
