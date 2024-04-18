import styled from "styled-components";
import UploadImagePreview from "./UploadImagePreview";
import FileInput from "../atoms/file/FileInput";

interface FileInputProps {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

function UploadImageList({ fileList, setFileList }: FileInputProps) {
  const onDeleteImage = async () => {};

  return (
    <UploadImageInputContainer>
      <FileInput setFileList={setFileList} />
      <div style={{ display: "flex" }}>
        {fileList?.map((file: File) => (
          <UploadImagePreview
            onDelete={() => onDeleteImage()}
            key={URL.createObjectURL(file)}
            image={URL.createObjectURL(file)}
          />
        ))}
      </div>
    </UploadImageInputContainer>
  );
}

const UploadImageInputContainer = styled.div`
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
