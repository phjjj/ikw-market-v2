import styled from "styled-components";

type BodyType = {
  body: string;
};

function Location({ body }: BodyType) {
  return <LocationWrapper>{body}</LocationWrapper>;
}
const LocationWrapper = styled.span``;
export default Location;
