import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import db from "./firebase"
import { collection,doc,getDocs, onSnapshot } from 'firebase/firestore'


// firestoreの内容を取得
// ----------------------------------------------------------------
function Todos({todo}:{todo:any}) {
  const [posts, setPosts] = useState<any[]>([]);
  const [filter, setFilter] = useState('notStarted')


  useEffect(() => {
    // データベースからデータを取得する
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      // console.log(snapShot.docs.map((doc) => ({...doc.data()})));
      setPosts(snapShot.docs.map((doc) => ({...doc.data()})));
    });

    // リアルタイムで取得
    onSnapshot(postData,(post) => {
      setPosts(post.docs.map((doc) => ({...doc.data()})));
    })
  },[]);
return <div className="App">
      <Head>
        <title>Todo一覧</title>
      </Head>
      <h1>Todo App</h1>
        <h2>
          <Link href="todos/create">
            <a>+ Add task</a>
          </Link>
        </h2>
        <div>
          <button>全て</button>
          <button>完了</button>
          <button>未完了</button>
        </div>
        <div>
        {posts.map((post) => (
          <div key={post.title}>
            <p>{post.title}</p>
            {/* ↓ここからでも優先度を変えれるようにしたい */}
            <p >{post.radio}</p>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="notStarted">着手前</option>
          <option value="inProgress">進行中</option>
          <option value="done">完了</option>
        </select>
            {/* <p>{post.text}</p> */}
          </div>
        ))}
    
  </div>
</div>

}

export default Todos;
