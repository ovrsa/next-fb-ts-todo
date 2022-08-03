import React from 'react';
import {auth} from './firebase';
// ↓firebase v9の際のログイン機能には必須
import { signInWithEmailAndPassword } from 'firebase/auth'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser, login, logout } from "../lib/auth";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    const { email, password } = event.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((user) => {
        console.log('ログイン成功=', user.user.uid)
        // const router = useRouter();
        // router.push("/");
      })
      .catch((error) => {
        console.error(error)
        alert(error.message)
      })    
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        
        <div>
          <button>ログイン</button>
        </div>
        
        <div>
          <Link  href="/signup"><button>新規登録</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login


// const Home: NextPage = () => {
//   const user = useUser();
  
//   const handleLogin = (): void => {
//     login().catch((error) => console.error(error));
//   };
  
//   const handleLogout = (): void => {
//     logout().catch((error) => console.error(error));
//   };
  
//   const router = useRouter();
//   const handleClick = e => {
//     e.preventDefault();
//     router.push("/");
//   };
  
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Auth Example</title>
//       </Head>

//       <div>
//         <h1>Sign in</h1>
//         {user !== null ? (
//           <h2>ログイン中</h2>
//         ) : (
//           <h2>ログインしていない</h2>
//         )}
//         <button onClick={handleLogin}>Googleでログイン</button>
//         <button onClick={handleLogout}>ログアウト</button>
//       </div>
//     </div>
//   );
// };


// export default Home
