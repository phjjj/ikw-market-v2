import styled from "styled-components";
import Text from "../../components/common/atoms/Text/Text";
import UploadForm from "../../components/Form/upload/UploadForm";

export const UploadLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 40px;
  width: 680px;
  margin: 0 auto;
  gap: 10px;
  @media screen and (max-width: 860px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

function UploadPage() {
  return (
    <UploadLayout>
      <Text
        style={{
          fontSize: "32px",
          margin: "0 0 10px 0",
          padding: "18px 0px 10px 0px;",
          fontFamily: "GmarketSansMedium",
          fontWeight: "bold",
        }}
      >
        상품 등록
      </Text>
      <UploadForm />
    </UploadLayout>
  );
}

export default UploadPage;
