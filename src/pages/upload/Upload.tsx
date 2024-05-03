import styled from "styled-components";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValueLoadable } from "recoil";
import { useNavigate } from "react-router-dom";
import UploadForm from "../../components/Form/upload/molecule/UploadForm";
import Title from "../../components/common/atoms/Title";
import { uploadProduct, uploadProductImgFile } from "../../lib/db/product";
import { IFileList, IProductData, IUser } from "../../types";
import { userSelector } from "../../recoil/user";
import { checkIsLogin } from "../../util";

type FormValues = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: void | string[];
  title: string;
  price: number;
  location: string;
  description: string;
};

function UploadPage() {
  const [fileList, setFileList] = useState<IFileList[]>([]);
  const { register, handleSubmit } = useForm<FormValues>();
  const userLoadable = useRecoilValueLoadable(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkIsLogin(userLoadable.contents)) {
      navigate("/login");
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const images = await uploadProductImgFile(fileList);

    const product: IProductData = {
      ...data,
      images,
      userId: (userLoadable.contents as IUser)?.id,
      commentList: [],
    };

    await uploadProduct(product);
    navigate("/");
  };

  const inputList = [
    { label: "상품명", maxLength: 20 },
    { label: "가격", type: "number" },
    { label: "거래위치", maxLength: 10 },
  ];

  const textAreaFormatted = {
    label: "상품설명",
    maxLength: 300,
  };

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
            register={register}
            value={item.type === "number" ? 0 : ""}
          />
        ))}
        <UploadForm.Textarea
          key={textAreaFormatted.label}
          labelText={textAreaFormatted.label}
          maxLength={textAreaFormatted.maxLength}
          register={register}
          value=""
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
