import styled from "styled-components";

type BodyType = {
  body: number;
};

function Price({ body }: BodyType) {
  return <PriceContainer>{body}</PriceContainer>;
}
const PriceContainer = styled.span``;

export default Price;
