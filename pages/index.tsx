import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AuthProvider } from './AuthContext'
import { useRecoilState } from "recoil";
import { postState } from "../components/atoms";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import db from "./firebase"
import { collection,doc,getDocs, onSnapshot } from 'firebase/firestore'
import SignUp from './signup'


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
