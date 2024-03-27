import styled from "styled-components";

type BodyType = {
  body: string;
};

function Location({ body }: BodyType) {
  return <LocationContainer>{body}</LocationContainer>;
}
const LocationContainer = styled.span``;
export default Location;
