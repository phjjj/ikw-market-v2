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
  id: string;
  kakaoId: number;
  name: string;
  image: string | null;
  createdAt: number;
}
