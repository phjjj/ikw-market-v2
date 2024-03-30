import styled from "styled-components";

type PriceType = {
  body: number;
};
function Price({ body }: PriceType) {
  return <PriceContainer>{body}원</PriceContainer>;
}
const PriceContainer = styled.span`
  font-weight: bold;
`;
export default Price;
