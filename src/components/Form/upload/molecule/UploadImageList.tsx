import styled from "styled-components";
import UploadImagePreview from "./UploadImagePreview";
import FileInput from "../atoms/file/FileInput";
import { IFileList } from "../../../../types";

interface FileInputProps {
  fileList: IFileList[];
  uploadFileList?: IFileList[];
  setFileList: React.Dispatch<React.SetStateAction<IFileList[]>>;
  setDeletedImageFileRef?: React.Dispatch<React.SetStateAction<string[]>>;
  setUploadFileList?: React.Dispatch<React.SetStateAction<IFileList[]>>;
}

function UploadImageList({
  fileList,
  uploadFileList,
  setFileList,
  setDeletedImageFileRef,
  setUploadFileList,
}: FileInputProps) {
  const onDeleteImage = (deleteFileUrl: string) => {
    setFileList(
      fileList.filter((file) => {
        if (file.ref) {
          if (setDeletedImageFileRef) {
            // DB의 product 문서 저장된 상품이 있으면 파일 스토리지에서 삭제 할수있도록 상태 변경 하도록 했음.
            if (deleteFileUrl === file.url) {
              setDeletedImageFileRef(
                (prev) =>
                  [...prev, file.ref].filter(
                    (ref) => ref !== undefined,
                  ) as string[],
              );
            }
          }
        }
        return file.url !== deleteFileUrl;
      }),
    );
    if (setUploadFileList && uploadFileList) {
      setUploadFileList(
        uploadFileList.filter((file) => file.url !== deleteFileUrl),
      );
    }
  };

  return (
    <UploadImageInputContainer>
      <FileInput
        setFileList={setFileList}
        setUploadFileList={setUploadFileList}
      />
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
