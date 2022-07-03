// https://github.com/makomori/my-login-app/tree/main/pages

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser, login, logout } from "../lib/auth";
import {useAuthState} from "react-firebase-hooks/auth"

const Home: NextPage = () => {
  const user = useUser();

  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Example</title>
      </Head>

      <div>
        <h1>Auth Example</h1>
        {user !== null ? (
          <h2>ログイン中</h2>
        ) : (
          <h2>ログインしていない</h2>
        )}
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    </div>
  );
};

// const UserInfo() {
//   return (
//     <div className="userInfo">
//       <img src={auth.currentUser.profileURL} alt="" />
//     </div>
//   )
// }

export default Home
