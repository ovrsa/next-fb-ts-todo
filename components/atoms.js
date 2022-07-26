import { atom } from "recoil";

//count
export const countState = atom({
    key: "count",
    default: 0
});

//user
export const userState = atom({
  key: "user",
  default: {
      name: "hoge",
      age: 11
  },
  // effects_UNSTABLE: [persistAtom] //追加
});