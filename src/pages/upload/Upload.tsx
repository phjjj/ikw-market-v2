import styled from "styled-components";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValueLoadable } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";
import UploadForm from "../../components/Form/upload/molecule/UploadForm";
import Title from "../../components/common/atoms/Title";
import { uploadProduct, uploadProductImgFile } from "../../lib/db/product";
import { FormValues, IFileList } from "../../types";
import { userSelector } from "../../recoil/user";
import { checkIsFormValidation, checkIsLogin } from "../../util";
import { IProductData } from "../../types/product";

function UploadPage() {
  const [fileList, setFileList] = useState<IFileList[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const userLoadable = useRecoilValueLoadable(userSelector);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!checkIsLogin(userLoadable.contents)) {
      navigate("/login", { state: { path: location.pathname } });
    }
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!checkIsFormValidation(errors, fileList)) {
      alert("상품 등록 입력창 작성 안한부분 있습니다!");
      return;
    }

    const images = await uploadProductImgFile(fileList);

    const product: IProductData = {
      ...data,
      id: "",
      images,
      userId:
        userLoadable.state === "hasValue" && userLoadable.contents.id
          ? userLoadable.contents.id
          : "",
      commentListId: "",
      createdAt: 0,
      isSale: true,
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
