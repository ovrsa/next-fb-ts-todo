import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextareaAutosize } from '@material-ui/core'
import { addDoc, collection, doc, getDocs, query, serverTimestamp, setDoc, Timestamp, updateDoc, where } from 'firebase/firestore'
import { useRecoilValue } from 'recoil'
import Todos from './todos'
import db from './firebase'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodoForm() {
  const router = useRouter()
  // const unCreatable = todo === ''
  const newTask = async (
    inputData:string,
    textData:string,
    priorityData:string,)  => {
    //Firebase ver9 compliant (modular)
    const id = uuidv4();
    const post = setDoc(doc(db, "posts",id), {
      id,
      title:inputData,
      text:textData,
      priority:priorityData,
      create: serverTimestamp(),
      update: serverTimestamp()
    });
    post.then(() => {
      router.push("./todos")
      uuidv4();
    })
  };

  const onAddFormSubmit = (e:any) => {
    // formを使っているときだけ
    e.preventDefault();
    const input = e.target.elements["title"].value
    const text = e.target.elements["detail"].value
    const priority = e.target.elements["priority"].value
    // const priority = e.target.element[2].value
    // console.log(e.target["priority"].value)
    newTask(input,text,priority)
  }

let random = Math.random() * 11;
console.log( random );

  return (
    <>
      <Head>
        <title>Todo作成</title>
      </Head>

      <form onSubmit={onAddFormSubmit}>
      <h2>Create</h2>
      <label htmlFor="todo"></label>

        <p>タイトル</p>
        <input 
          style={{ marginRight: "5px" }}
          name="title"
          type="text"
          placeholder="タスク名"
          // value={todo}
          // onChange={onAddInputChange}
          autoFocus
          // onChangeCapture={(e) => setPosts(e.target.value)}
        />
        <p>詳細</p>

        <textarea 
        name="detail"
        // value={todo}
        // onChange={onAddInputChange}
        >
        </textarea>
        
        <br />
            <p>優先度</p>
            <div>
              <input id="high" type="radio" value="高" name="priority"/>
              <label htmlFor="high">高</label>
            </div>
            <div>
              <input id="middle" type="radio" value="中" name="priority"/>
              <label htmlFor="middle">中</label>
            </div>
            <div>
              <input id="low" type="radio" value="低" name="priority"/>
              <label htmlFor="low">低</label>
            </div>
          
        <br />
        <button
          type="submit"
          // onClick={onAddFormSubmit}
          // disabled={unCreatable}
        >
          追加
        </button>

      <Link href="./">
        <button>戻る</button>
      </Link>
      </form>
    </>
  )
}

export {}
