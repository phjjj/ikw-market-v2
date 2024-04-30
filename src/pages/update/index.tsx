import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { userIdAtom } from "../../recoil/user";
import { getProduct } from "../../lib/db/product";
import { IProductData } from "../../types";
import { UploadContainer } from "../upload/Upload";
import Title from "../../components/common/atoms/Title";

function ProductUpdatePage() {
  const { id: productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<IProductData | unknown>();
  const userId = useRecoilValue(userIdAtom);

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((res) => {
        setProduct(res);
        setIsLoading(false);
      });
    }
  }, []);

  console.log(product, userId);
  return (
    <UploadContainer>
      {isLoading && <Title className="xl">로딩중...</Title>}
      {!isLoading && <Title className="xl">상품수정</Title>}
    </UploadContainer>
  );
}

export default ProductUpdatePage;
