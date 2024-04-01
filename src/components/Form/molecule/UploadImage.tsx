/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useState } from "react";
import UploadImagePreview from "./UploadImagePreview";
import FileInput from "../atoms/file/FileInput";

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

function UploadImageInput() {
  const [fileList, setFileList] = useState<string[]>([]);
  const onDeleteImage = async () => {};

  return (
    <UploadImageInputLayout>
      <FileInput setFileList={setFileList} />
      <div style={{ display: "flex" }}>
        {fileList?.map((image: string, idx: number) => (
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
