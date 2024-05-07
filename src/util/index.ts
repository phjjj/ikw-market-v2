import { IUser } from "../types";

export const checkIsLogin = (user: IUser) => {
  const sessionStorageUserId = sessionStorage.getItem("uid");

  if (sessionStorageUserId) {
    const { userIdAtom } = JSON.parse(sessionStorageUserId);
    if (user && userIdAtom) {
      return true;
    }
    return false;
  }
  return false;
};
