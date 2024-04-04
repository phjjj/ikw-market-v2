import {
  LargeTitleWrapper,
  MediumTitleWrapper,
  SmallTitleWrapper,
  XLargeTitleWrapper,
  BaseTitleWrapper,
} from "../../../../styles/common/atoms/Title/index.style";
import { ReactChildrenProps } from "../../../../types";

function Title({ className, children }: ReactChildrenProps) {
  let content;

  if (className === "sm") {
    content = <SmallTitleWrapper>{children}</SmallTitleWrapper>;
  } else if (className === "md") {
    content = <MediumTitleWrapper>{children}</MediumTitleWrapper>;
  } else if (className === "lg") {
    content = <LargeTitleWrapper>{children}</LargeTitleWrapper>;
  } else if (className === "xl") {
    content = <XLargeTitleWrapper>{children}</XLargeTitleWrapper>;
  } else {
    content = <BaseTitleWrapper>{children}</BaseTitleWrapper>;
  }

  return content;
}

export default Title;
