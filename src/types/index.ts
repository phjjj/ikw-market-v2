import { ReactNode } from "react";

export interface ReactChildrenProps {
  children: ReactNode;
  className?: string;
}

export interface IKakaoUserResultData {
  data: {
    id: number;
    kakao_account: {
      profile: {
        nickname: string;
        profile_image_url: string;
      };
    };
  };
}

export interface IUser {
  id?: string | undefined;
  kakaoId: number;
  name: string;
  image: string | null;
  createdAt?: number;
}

export interface IProductData {
  id?: string;
  userName?: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: IFileList[];
  userId: string;
  createdAt?: number;
  commentListId?: string;
}

export interface ICommentList {
  comments?: IComments[];
  id?: string;
  productId: string;
}

export interface IComments {
  id: string;
  text: string;
  createdAt: number;
}

export interface IFileList {
  data?: File;
  url: string;
  ref?: string;
}
