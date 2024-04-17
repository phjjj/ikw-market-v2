import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IUser } from "../../types";

const { persistAtom: kakaoIdPeristAtom } = recoilPersist({
  key: "kakaoIdRecoilPerist",
  storage: sessionStorage,
});

export const kakaoIdAtom = atom({
  key: "kakaoId",
  default: 0,
  effects_UNSTABLE: [kakaoIdPeristAtom],
});

export const userAtom = atom<IUser>({
  default: {
    id: "",
    kakaoId: 0,
    name: "",
    image: "",
    createdAt: 0,
  },
  key: "user",
});
