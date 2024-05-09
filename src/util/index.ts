import { FieldErrors } from "react-hook-form";
import { FormValues, IFileList, IUser } from "../types";

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

export const checkIsFormValidation = (
  errors: FieldErrors<FormValues>,
  fileList: IFileList[],
) => {
  if (
    errors.description ||
    errors.price ||
    errors.title ||
    fileList.length === 0
  ) {
    return false;
  }

  return true;
};
