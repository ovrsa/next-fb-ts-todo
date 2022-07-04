import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import db from "./firebase"
import { collection,doc,getDocs, onSnapshot } from 'firebase/firestore'

// firestoreの内容を取得
// ----------------------------------------------------------------
function Todos({todo}:{todo:any}) {
  const [posts, setPosts] = useState<any[]>([]);

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
  {posts.map((post) => (
    <div key={post.title}>
      <p>{post.title}</p>
      <p>{post.text}</p>
    </div>
  ))}
  </div>
</div>

}

export default Todos;

// export default function Todos({todo}:{todo:any}) {
//   const [users,setUsers] = useState([]);

//   useEffect(() => {
//     // データベースからデータを取得する
//     const userData = collection(db, "users");
//     getDocs(userData).then((snapShot) => {
//       // console.log(snapShot.docs.map((doc) => ({...doc.data()})));
//       (snapShot.docs.map((doc) => ({...doc.data()})));
//     })
//   },[]);

//   return (
//     <>
      // <Head>
      //   <title>First user</title>
      // </Head>
      // <h1>Todo App</h1>

//       <h2>
//         <Link href="todos/create">
//           <a>+ Add task</a>
//         </Link>
//       </h2>
//       <div className = "App">
//         {users.map((user) => (
//           <>
//           <div key={user.title}>
//             <h1>{user.admin}</h1>
//           </div>
//           </>
//         ))}
//       </div>
//     </>
//   )
// }
