import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AuthProvider } from './AuthContext'
import SignUp from './SignUp'


const Home: NextPage = () => {
  return (
    <AuthProvider>
      <div style={{ margin: '2em' }}>
        <SignUp />
      </div>
    </AuthProvider>
  )
}

export default Home
