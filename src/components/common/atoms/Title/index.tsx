import {
  LargeTitleWrapper,
  MediumTitleWrapper,
  SmallTitleWrapper,
  XLargeTitleWrapper,
  BaseTitleWrapper,
} from "./index.style";
import { ReactChildrenProps } from "../../../../types";

function Title({ className, children }: ReactChildrenProps) {
  switch (className) {
    case "sm":
      return <SmallTitleWrapper>{children}</SmallTitleWrapper>;
    case "md":
      return <MediumTitleWrapper>{children}</MediumTitleWrapper>;
    case "lg":
      return <LargeTitleWrapper>{children}</LargeTitleWrapper>;
    case "xl":
      return <XLargeTitleWrapper>{children}</XLargeTitleWrapper>;
    default:
      return <BaseTitleWrapper>{children}</BaseTitleWrapper>;
  }
}

export default Title;
