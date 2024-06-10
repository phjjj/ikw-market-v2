import { IFileList } from "..";
import { ICommentList } from "../comment";

export interface IProductData {
  id: string;
  userName?: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: IFileList[];
  userId: string;
  createdAt: number;
  commentListId: string;
  comments?: ICommentList; // 이부분 다시 commentListId로 작업하는 방식으로 해야되는지 의논 해야될것 같음.
  isSale: boolean; // 현재 상품 판매중인지 판단할 필드.
}
