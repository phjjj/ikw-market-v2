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
  id: string;
  userName: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: IFileList[];
  userId: string;
  createdAt: number;
  commentList: [];
}

export interface IFileList {
  data?: File;
  url: string;
  ref?: string;
}
