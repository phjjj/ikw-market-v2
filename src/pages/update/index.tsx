import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userSelector } from "../../recoil/user";
import {
  deleteProductImageFile,
  getProduct,
  updateProduct,
  uploadProductImgFile,
} from "../../lib/db/product";
import { IFileList, IProductData, IUser } from "../../types";
import { UploadContainer } from "../upload/Upload";
import Title from "../../components/common/atoms/Title";
import UploadForm from "../../components/Form/upload/molecule/UploadForm";
import { checkIsLogin } from "../../util";

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
  const userLoadable = useRecoilValueLoadable(userSelector);
  const { register, handleSubmit } = useForm<FormValues>();
  const [fileList, setFileList] = useState<IFileList[]>([]);
  const [deletedImageFileRef, setDeletedImageFileRef] = useState<string[]>([]);
  const [uploadFileList, setUploadFileList] = useState<IFileList[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((res: IProductData) => {
        setProduct(res);
        setFileList(res.images || []);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (!checkIsLogin(userLoadable.contents)) {
      navigate("/login", { state: { path: location.pathname } });
    }
  }, []);

  const inputList = [
    { label: "상품명", maxLength: 20 },
    { label: "가격", type: "number" },
    { label: "거래위치", maxLength: 10 },
  ];

  const textAreaFormatted = {
    label: "상품설명",
    maxLength: 300,
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updateProductData: IProductData = {
      ...data,
      images: fileList,
      userId: (userLoadable.contents as IUser)?.id,
      commentList: [],
    };

    if (deletedImageFileRef.length > 0) {
      await deleteProductImageFile(deletedImageFileRef);
    }

    if (uploadFileList.length > 0) {
      const uploadImages = await uploadProductImgFile(uploadFileList);
      uploadFileList.forEach(() => {
        updateProductData.images?.pop();
      });
      updateProductData.images = [...updateProductData.images, ...uploadImages];
    }
    if (productId) {
      await updateProduct(productId, updateProductData);
    }
    navigate("/");
  };

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
              uploadFileList={uploadFileList}
              setFileList={setFileList}
              setUploadFileList={setUploadFileList}
              setDeletedImageFileRef={setDeletedImageFileRef}
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
