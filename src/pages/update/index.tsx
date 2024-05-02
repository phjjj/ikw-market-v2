import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userIdAtom } from "../../recoil/user";
import { getProduct } from "../../lib/db/product";
import { IFileList, IProductData } from "../../types";
import { UploadContainer } from "../upload/Upload";
import Title from "../../components/common/atoms/Title";
import UploadForm from "../../components/Form/upload/molecule/UploadForm";

type FormValues = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images: void | string[];
  title: string;
  price: number;
  location: string;
  description: string;
};

function ProductUpdatePage() {
  const { id: productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<IProductData>();
  const userId = useRecoilValue(userIdAtom);
  const { register, handleSubmit } = useForm<FormValues>();
  const [fileList, setFileList] = useState<IFileList[]>([]);

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((res: IProductData) => {
        setProduct(res);
        setFileList(res.images || []);
        setIsLoading(false);
      });
    }
  }, []);

  console.log(product, userId);

  const inputList = [
    { label: "상품명", maxLength: 20 },
    { label: "가격", type: "number" },
    { label: "거래위치", maxLength: 10 },
  ];

  const textAreaFormatted = {
    label: "상품설명",
    maxLength: 300,
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {};

  // eslint-disable-next-line consistent-return
  const settingInputValue = (inputLabel: string) => {
    if (inputLabel === "상품명") {
      return product?.title;
    }
    if (inputLabel === "가격") {
      return product?.price;
    }
    if (inputLabel === "거래위치") {
      return product?.location;
    }
  };

  return (
    <UploadContainer>
      {isLoading && <Title className="xl">로딩중...</Title>}
      {!isLoading && (
        <>
          <Title className="xl">상품수정</Title>
          <UploadForm handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <UploadForm.ImageList
              fileList={fileList}
              setFileList={setFileList}
            />
            {inputList.map((item) => (
              <UploadForm.Input
                key={item.label}
                type={item.type}
                labelText={item.label}
                maxLength={item.maxLength}
                register={register}
                value={settingInputValue(item.label)}
              />
            ))}
            <UploadForm.Textarea
              key={textAreaFormatted.label}
              labelText={textAreaFormatted.label}
              maxLength={textAreaFormatted.maxLength}
              register={register}
              value={product?.description}
            />
            <UploadForm.Button>수정 하기</UploadForm.Button>
          </UploadForm>
        </>
      )}
    </UploadContainer>
  );
}

export default ProductUpdatePage;
