import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {useState} from "react";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export function useAuth() {
  return auth;
}
// appから変更
export default db;

export function useUser() {
  const [user,setUser] = useState<User>();
  onAuthStateChanged(auth,(user) => {
    if(user) setUser(user);
  });
  return user;
}

export const storage = getStorage();

