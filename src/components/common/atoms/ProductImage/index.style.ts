import styled from "styled-components";

/* 기본적인 스타일 */
export const BaseImageWrapper = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;

/* sm 사이즈 */
export const SmallImageWrapper = styled(BaseImageWrapper)`
  width: 200px;
  height: 200px;
`;

/* lg 사이즈 */
export const LargeImageWrapper = styled(BaseImageWrapper)`
  width: 674px;
  height: 674px;
`;
