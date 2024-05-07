import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { getUserDoc } from "../../lib/db/user";
import { IProductData } from "../../types";

const { persistAtom: userIdPeristAtom } = recoilPersist({
  key: "uid",
  storage: sessionStorage,
});

export const userIdAtom = atom({
  key: "userIdAtom",
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

export const allProductsAtom = atom<IProductData[]>({
  key: "allProductsAtom",
  default: [],
});

// 셀렉터는 아톰을 구독해서 아톰값이 변경될때마다 자동으로 재계산 되는데
// 상품 상세 정보를 계속해서 불러올 필요가 없다

// export const productSelector = selector<IProductData>({
//   key: "productSelector",
//   get: ({ get }) => {
//     try {
//       const allProducts = get(allProductsAtom);
//       const productId = window.location.pathname.split("/").pop();
//       const product = allProducts.find((p) => p.id === productId);
//       if (product) {
//         return product;
//       }
//       throw new Error("상품을 찾을 수 없습니다.");
//       // Add your code here
//     } catch (error) {
//       throw new Error("상품 페이지 오류가 발생하였습니다.");
//     }
//   },
// });
