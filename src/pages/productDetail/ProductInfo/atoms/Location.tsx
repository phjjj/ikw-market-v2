import styled from "styled-components";

type LocationType = {
  body: string;
};

function Location({ body }: LocationType) {
  return <LocationWrraper>{body}</LocationWrraper>;
}

const LocationWrraper = styled.span`
  font-weight: 170;
  font-size: 14px;
`;
export default Location;
