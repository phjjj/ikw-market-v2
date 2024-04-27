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
    // userIdAtom에서 유저 ID를 가져옵니다.
    const userId = get(userIdAtom);

    // 유저 ID가 없으면 null을 반환합니다.
    if (!userId) {
      return null;
    }

    // Firebase에서 유저 정보를 가져오는 코드를 작성합니다.
    try {
      const userDoc = await getUserDoc(userId);
      return userDoc;
    } catch (error) {
      return null;
    }
  },
});
