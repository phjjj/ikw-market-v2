import { ReactNode } from "react";

export interface ReactChildrenProps {
  children: ReactNode;
  className?: string;
}

export interface IKakaoUserResultData {
  data: {
    id: number;
    kakao_account: {
      email: string;
      profile: {
        nickname: string;
        profile_image_url: string;
      };
    };
  };
}
