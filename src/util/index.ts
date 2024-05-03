import { IUser } from "../types";

export const checkIsLogin = (user: IUser) => {
  const sessionStorageKakaoId = sessionStorage.getItem("uid");

  if (sessionStorageKakaoId) {
    const { userId } = JSON.parse(sessionStorageKakaoId);
    if (user && userId) {
      return true;
    }
    return false;
  }
  return false;
};
