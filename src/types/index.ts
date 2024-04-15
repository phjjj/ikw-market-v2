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
  id?: string;
  kakaoId: number;
  name: string;
  image?: string;
  createdAt?: number;
}
