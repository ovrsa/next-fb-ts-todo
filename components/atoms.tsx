import { atom } from "recoil";
import { collection,doc,getDocs, onSnapshot, query, where, orderBy  } from 'firebase/firestore'
import db from "../pages/firebase"

// //count
// export const countState = atom({
//     key: "count",
//     default: 0
// });

// //user
// export const userState = atom({
//   key: "user",
//   default: {
//       name: "hoge",
//       age: 11
//   },
//   // effects_UNSTABLE: [persistAtom] //追加
// });

export const postState = atom({
  key: 'postState',
  default: '',
});
