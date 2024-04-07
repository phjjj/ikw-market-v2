import React, { useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import styled from "styled-components";

function FileInput({
  setFileList,
}: {
  setFileList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const uploadImgInput = useRef<HTMLInputElement>(null);

  const onChangeImgInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const imagFiles = e.target.files || [];
    const imgFileList = Array.from(imagFiles);

    imgFileList.forEach((imgFile) => {
      const blob = URL.createObjectURL(imgFile);
      setFileList((prev) => [...prev, blob]);
    });
  };

  const onClickButton = () => {
    uploadImgInput.current?.click();
  };

  return (
    <>
      <input
        onChange={onChangeImgInput}
        ref={uploadImgInput}
        style={{ display: "none" }}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
      />
      <Button type="button" onClick={onClickButton}>
        <BiImageAdd size={50} />
        상품 이미지 등록
      </Button>
    </>
  );
}

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

export default FileInput;
