import React from "react";
import styled from "styled-components";

type Props = {
  style?: StyleProps;
};

type StyleProps = {
  overflow?: string;
  textOverflow?: string;
  fontWeight?: string;
  fontSize?: string;
  wordBreak?: string;
  fontFamily?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
};

const TextLayout = styled.span<StyleProps>`
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  word-break: ${(props) => props.wordBreak};
  font-family: ${(props) => props.fontFamily};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: center;
`;

function Text({ style, children }: React.PropsWithChildren<Props>) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <TextLayout
      overflow={style?.overflow}
      textOverflow={style?.textOverflow}
      fontWeight={style?.fontWeight}
      fontSize={style?.fontSize}
      wordBreak={style?.wordBreak}
      fontFamily={style?.fontFamily}
      margin={style?.margin}
      padding={style?.padding}
    >
      {children}
    </TextLayout>
  );
}

export default Text;
