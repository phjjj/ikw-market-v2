/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function useInput(
  initialValue: any,
  initialLength: number,
  isNumeric: boolean,
) {
  const [value, setValue] = useState(initialValue);
  const [length, setLength] = useState(0);

  const onInput = (e: any) => {
    const currentValue = e.target.value;
    // 길이 제한 및 현재 길이 업데이트
    if (currentValue.length > initialLength) {
      setValue(currentValue.slice(0, initialLength));
      return;
    }
    setValue(currentValue);

    setLength(currentValue.length);
    // 가격부분 숫자만 입력
    if (isNumeric) {
      const formattedValue = Number(
        currentValue.replace(/\D/g, ""),
      ).toLocaleString("ko-KR");
      setValue(formattedValue);
    }
  };

  return {
    value,
    length,
    onInput,
  };
}

export default useInput;
