import styled from "styled-components";

/* 기본적인 스타일 */
export const BaseTitleWrapper = styled.h1`
  margin: 0 0 10px 0;
  padding: 18px 0px 10px 0px;
  font-family: "GmarketSansMedium";
  font-weight: bold;
  text-align: center;
`;

/* fs-sm 사이즈 타이틀 */
export const SmallTitleWrapper = styled(BaseTitleWrapper)`
  font-size: 11px;
`;

/* fs-md 사이즈 타이틀 */
export const MediumTitleWrapper = styled(BaseTitleWrapper)`
  font-size: 16px;
`;

/* fs-lg 사이즈 타이틀 */
export const LargeTitleWrapper = styled(BaseTitleWrapper)`
  font-size: 24px;
`;

/* fs-xl 사이즈 타이틀 */
export const XLargeTitleWrapper = styled(BaseTitleWrapper)`
  font-size: 32px;
`;
