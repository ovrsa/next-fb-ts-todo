import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AuthProvider } from './AuthContext'
import SignUp from './SignUp'
import { useRecoilState } from "recoil";
import { countState, userState } from "../components/atoms";
import Link from 'next/link'


const Home: NextPage = () => {
    //atomの値の操作を定義（read,write)
    const [count, setCount] = useRecoilState(countState);
    const [user, setUser] = useRecoilState(userState);

      //count increment処理
  const increment = c => {
    return c + 1;
  }

    //userのageをカウントアップ（機能としては意味無し）
    const updateUser = u => {
      return { ...u, ...{ age: u.age + 1 } };
    }
  return (
    // <AuthProvider>
    //   <div style={{ margin: '2em' }}>
    //     <SignUp />
    //   </div>
    // </AuthProvider>
    <>
    <h1>Home</h1>
    <div>
      <p>count:{count}</p>
      <button onClick={() => setCount(increment)}>count increment</button>
      <hr />
      <p>user.name:{user.name}</p>
      <p>user.age:{user.age}</p>
      <button onClick={() => setUser(updateUser)}>age increment</button>
    </div>
    <hr />
    <div>
      <Link href="/about"><a>About</a></Link>
    </div>
  </>
  )
}

export default Home
