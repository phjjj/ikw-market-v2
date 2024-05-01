import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getUserDoc } from "../../lib/db/user";

const { persistAtom: userIdPeristAtom } = recoilPersist({
  key: "uid",
  storage: sessionStorage,
});

export const userIdAtom = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [userIdPeristAtom],
});

export const userSelector = selector({
  key: "userSelector",
  get: async ({ get }) => {
    const userId = get(userIdAtom);
    const userDoc = await getUserDoc(userId);
    return userDoc;
  },
});
