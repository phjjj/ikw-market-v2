import React from "react";
import { BiImageAdd } from "react-icons/bi";
import styled from "styled-components";
import { IFileList } from "../../../../../types";

interface FileInputProps {
  setFileList: React.Dispatch<React.SetStateAction<IFileList[]>>;
  setUploadFileList?: React.Dispatch<React.SetStateAction<IFileList[]>>;
}

function FileInput({ setFileList, setUploadFileList }: FileInputProps) {
  const onChangeImgInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFiles = Array.from(e.target.files);
      imageFiles.forEach((file: File) => {
        const fileUrl = URL.createObjectURL(file);
        setFileList((prev) => [...prev, { data: file, url: fileUrl }]);
        if (setUploadFileList) {
          setUploadFileList((prev) => [...prev, { data: file, url: fileUrl }]);
        }
      });
    }
  };

  return (
    <InputWrapper>
      <input
        onChange={onChangeImgInput}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
      />
      <Button>
        <BiImageAdd size={50} />
        상품 이미지 등록
      </Button>
    </InputWrapper>
  );
}

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 200px;
  cursor: pointer;

  input {
    display: none;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default FileInput;
