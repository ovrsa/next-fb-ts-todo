import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import db from "./firebase"
import { collection,doc,getDocs, onSnapshot, query, where, orderBy  } from 'firebase/firestore'
import { useRecoilState } from "recoil";
import { postState } from "../components/atoms";
import { CssBaseline } from '@material-ui/core';
import { FirebaseError } from 'firebase/app'

// firestoreの内容を取得
function Todos({todo}:{todo:any}) {
  const [posts, setPosts] = useState<any[]>([
  ]);
  const q = query(
    collection(db, 'posts'),
    where('isDraft', '==', false),
    where('isTrash', '==', false),
    orderBy('create')
  )

  // ソートの値を保持する
  const [sort, setSort] = useState('')

  useEffect(() => {
    const unSub = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((post) => ({
          id: post.data().id,
          title: post.data().title,
          status: post.data().status,
          priority: post.data().priority,
          // create: parseTimestampToDate(todo.data().create, '-'),
          // update: todo.data().update ? parseTimestampToDate(todo.data().update, '-') : '更新中',
          isDraft: post.data().isDraft,
          isTrash: post.data().isTrash,
          author: post.data().author
        }))
      )
    })
    return () => unSub()
  }, [])
  // setpostの部分をrecoilに保存するように


  // useStateでステータス(状態、優先度)の保持
  const [filteringStatus, setFilteringStatus] = useState('NONE')
  const [filteringPriority, setFilteringPriority] = useState('None')

  // フィルターの関数定義
  // SelectChangeEventが変更したタイミングでsetFilteringStatusの値が変わる
  const filteringStatusChange = (event: SelectChangeEvent) => {
    setFilteringStatus(event.target.value as string)
  }
  const filteringPriorityChange = (event: SelectChangeEvent) => {
    setFilteringPriority(event.target.value as string)
  }

  // フィルターの条件をリセットする
  const resetClick = () => {
    setFilteringStatus('NONE')
    setFilteringPriority('None')
  }

  // statusの値が変わった際に値を保持する
  const changeStatus = (event: SelectChangeEvent,id: string) => {
    const status = event.target.value
  }

  // priorityの値が変わった際に値を保持する
  const changePriority = (event: SelectChangeEvent,id: string) => {
    const priority = event.target.value
  }

  function formatDate(dt:Date){
    let y =dt.getFullYear();
    let m = ('00' + (dt.getMonth()+1)).slice(-2);
    let d = ('00' + dt.getDate()).slice(-2);
    return (y + '-' + m + '-' + d);  }

  useEffect(() => {
    // データベースからデータを取得する
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
    setPosts(snapShot.docs.map((doc) => ({...doc.data()})));
    });

    // リアルタイムで取得
    onSnapshot(postData,(post) => {
    setPosts(post.docs.map((doc) => ({...doc.data()})));
    })
  },[]);

return( 
      <>
        <div className="App">
          <Head>
          <title>Todo一覧</title>
          </Head>
          <h2>Todo List</h2>
          <h2>
          <Link href="createTodo">
          <a>+ Add task</a>
          </Link>
          </h2>
          <CssBaseline />

          <div>
          {posts.map((post) => (
            <div key={post.title}>
            <Link href={`/details/${post.id}`}>
            <a>{post.title}</a>
            </Link>

            <p>{post.priority}</p>
            <p>{formatDate(new Date(post.create.toDate().toString()))}</p>
            <select
              value={post.priority ?? ''}
              onChange={(e: SelectChangeEvent) => changeStatus(e, post.id)}
            >
              <option>低</option>
              <option>中</option>
              <option>高</option>
            </select>

            {/* 進捗状況 */}
            <select
              value={post.status ?? ''}
              onChange={(e: SelectChangeEvent) => changeStatus(e, post.id)}
            >
              <option value="NOT STARTED">未完了</option>
              <option value="DOING">作業中</option>
              <option value="DONE">完了</option>
            </select>
            {/* <p >{post.update}</p> */}
            </div>
          ))}

          </div>
        </div>
      </>
)

}

export default Todos;
