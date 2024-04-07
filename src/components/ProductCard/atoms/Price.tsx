import styled from "styled-components";

type BodyType = {
  body: number;
};

function Price({ body }: BodyType) {
  return <PriceWrapper>{body}</PriceWrapper>;
}
const PriceWrapper = styled.span``;

export default Price;
