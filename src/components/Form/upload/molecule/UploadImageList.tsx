import styled from "styled-components";
import UploadImagePreview from "./UploadImagePreview";
import FileInput from "../atoms/file/FileInput";

interface IFileList {
  data?: File;
  url: string;
  ref?: string;
}
interface FileInputProps {
  fileList: IFileList[];
  setFileList: React.Dispatch<React.SetStateAction<IFileList[]>>;
}

function UploadImageList({ fileList, setFileList }: FileInputProps) {
  const onDeleteImage = (deleteFileUrl: string) => {
    setFileList(fileList.filter((file) => file.url !== deleteFileUrl));
  };

  return (
    <UploadImageInputContainer>
      <FileInput setFileList={setFileList} />
      <div style={{ display: "flex" }}>
        {fileList?.map((file) => (
          <UploadImagePreview
            onDelete={() => onDeleteImage(file.url)}
            key={file.url}
            image={file.url}
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
