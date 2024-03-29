/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import styled from "styled-components";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BiImageAdd } from "react-icons/bi";
import Input from "../../common/atoms/Input/Input";
import UploadImagePreview from "./UploadImagePreview";

const UploadImageInputLayout = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  padding-top: 10px;
  @media screen and (max-width: 500px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: gray;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 200px;
  flex: 0 0 auto;
`;

function UploadImageInput({ fileList }: any) {
  const uploadImgInput = useRef() as any;

  const onChangeImgInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  // const resizeImage = () => {};

  const onDeleteImage = async () => {};
  return (
    <UploadImageInputLayout>
      <Input
        onChange={onChangeImgInput}
        ref={uploadImgInput}
        style={{ display: "none" }}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
      />
      <Button>
        <BiImageAdd size={50} />
        상품 이미지 등록
      </Button>
      <div style={{ display: "flex" }}>
        {fileList.map((image: string, idx: number) => (
          <UploadImagePreview
            onDelete={() => onDeleteImage()}
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            image={image}
          />
        ))}
      </div>
    </UploadImageInputLayout>
  );
}

export default UploadImageInput;
