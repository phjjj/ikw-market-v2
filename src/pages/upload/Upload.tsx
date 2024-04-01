import styled from "styled-components";
import { useState } from "react";
import Text from "../../components/common/atoms/Text/Text";
import UploadForm from "../../components/Form/organisms/UploadForm";

export const UploadLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 40px;
  max-width: 680px;
  margin: 0 auto;
  gap: 10px;
  @media screen and (max-width: 860px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

function UploadPage() {
  const [inputList, setInputList] = useState([
    { label: "상품명", maxLength: 20, value: "" },
    { label: "가격", type: "number", value: "" },
    { label: "거래위치", maxLength: 10, value: "" },
  ]);
  const [textareaInfo, setTextareaInfo] = useState({
    label: "상품설명",
    maxLength: 300,
    value: "",
  });

  const handleChange = (index: number, newValue: string) => {
    setInputList((prevState) => {
      const updatedProductInfo = [...prevState];
      updatedProductInfo[index].value = newValue;
      return updatedProductInfo;
    });
  };

  const onTextAreaChange = (newValue: string) => {
    setTextareaInfo((prevState) => {
      const updatedTextareaInfo = {
        ...prevState,
        value: newValue,
      };
      return updatedTextareaInfo;
    });
  };

  return (
    <UploadLayout>
      <Text
        style={{
          fontSize: "32px",
          margin: "0 0 10px 0",
          padding: "18px 0px 10px 0px;",
          fontFamily: "GmarketSansMedium",
          fontWeight: "bold",
        }}
      >
        상품 등록
      </Text>
      <UploadForm>
        <UploadForm.Image />
        {inputList.map((item, index) => (
          <UploadForm.Input
            // eslint-disable-next-line react/no-array-index-key
            key={item.label}
            type={item.type}
            labelText={item.label}
            maxLength={item.maxLength}
            value={item.value}
            onChangeInputValue={(newValue: string) =>
              handleChange(index, newValue)
            }
          />
        ))}
        <UploadForm.Textarea
          key={textareaInfo.label}
          labelText={textareaInfo.label}
          maxLength={textareaInfo.maxLength}
          onChangeInputValue={(newValue: string) => onTextAreaChange(newValue)}
          value={textareaInfo.value}
        />
        <UploadForm.Button>등록 하기</UploadForm.Button>
      </UploadForm>
    </UploadLayout>
  );
}

export default UploadPage;
