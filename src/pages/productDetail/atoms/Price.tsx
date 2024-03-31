import styled from "styled-components";

type PriceType = {
  body: number;
};
function Price({ body }: PriceType) {
  return <PriceWrapper>{body}+원</PriceWrapper>;
}
const PriceWrapper = styled.span`
  font-weight: bold;
`;
export default Price;
