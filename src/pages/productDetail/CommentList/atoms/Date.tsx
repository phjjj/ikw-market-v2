import styled from "styled-components";

type DateType = {
  body: string;
};
function Date({ body }: DateType) {
  return (
    <DateWrapper>
      <span>{body}</span>
    </DateWrapper>
  );
}
const DateWrapper = styled.div`
  font-size: 0.67rem;
  font-weight: 200;
  margin-top: 0.23rem;
`;
export default Date;
