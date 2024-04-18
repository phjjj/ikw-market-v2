import styled from "styled-components";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import UploadForm from "../../components/Form/upload/molecule/UploadForm";
import Title from "../../components/common/atoms/Title";
import { uploadProductImgFile } from "../../lib/db/product";

type FormValues = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: void | string[];
  title: string;
  price: number;
  location: string;
  description: string;
};

function UploadPage() {
  const [fileList, setFileList] = useState<File[]>([]);
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const images = uploadProductImgFile(fileList);
    const productObj = {
      ...data,
      images,
    };
    console.log(productObj);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputList, setInputList] = useState([
    { label: "상품명", maxLength: 20, value: "" },
    { label: "가격", type: "number", value: "" },
    { label: "거래위치", maxLength: 10, value: "" },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [textareaInfo, setTextareaInfo] = useState({
    label: "상품설명",
    maxLength: 300,
    value: "",
  });

  return (
    <UploadContainer>
      <Title className="xl">상품등록</Title>
      <UploadForm handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <UploadForm.ImageList fileList={fileList} setFileList={setFileList} />
        {inputList.map((item) => (
          <UploadForm.Input
            key={item.label}
            type={item.type}
            labelText={item.label}
            maxLength={item.maxLength}
            value={item.value}
            register={register}
          />
        ))}
        <UploadForm.Textarea
          key={textareaInfo.label}
          labelText={textareaInfo.label}
          maxLength={textareaInfo.maxLength}
          value={textareaInfo.value}
          register={register}
        />
        <UploadForm.Button>등록 하기</UploadForm.Button>
      </UploadForm>
    </UploadContainer>
  );
}

export const UploadContainer = styled.div`
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

export default UploadPage;
