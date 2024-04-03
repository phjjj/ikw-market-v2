import styled from "styled-components";
import { useState } from "react";
import UploadImagePreview from "./UploadImagePreview";
import FileInput from "../atoms/file/FileInput";

function UploadImageList() {
  const [fileList, setFileList] = useState<string[]>([]);
  const onDeleteImage = async () => {};

  return (
    <UploadImageInputLayout>
      <FileInput setFileList={setFileList} />
      <div style={{ display: "flex" }}>
        {fileList?.map((image: string) => (
          <UploadImagePreview
            onDelete={() => onDeleteImage()}
            key={image}
            image={image}
          />
        ))}
      </div>
    </UploadImageInputLayout>
  );
}

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

export default UploadImageList;
