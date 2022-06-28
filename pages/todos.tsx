import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

// import { db } from './firebase'
import { snapshotEqual } from 'firebase/firestore'

export default function Todos({todo}:{todo:any}) {
  // const [tasks, setTasks] = useState([{ id: '', title: '' }])
  // useEffect(() => {
  //   const unSub = db.collection('tasks').onSnapshot((snapshot) => {
  //     setTasks(
  //       snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
  //     )
  //   })
  //   return () => unSub()
  // }, [])

  return (
    <>
      {/* {tasks.map((task) => (
        <h3>{task.title}</h3>
      ))} */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Todo App</h1>

      <h2>
        <Link href="todos/create">
          <a>+ Add task</a>
        </Link>
      </h2>

  <ul>
    {todo.map((todo) => (
      <li key={todo.id}>
        <span>{todo.title}</span>
          <select value={todo.status}>
            <option value='notStarted'>未着手</option>
            <option value='inProgress'>作業中</option>
            <option value='done'>完了</option>
          </select>
        <button>編集</button>
        <button>削除</button>
      </li>
    ))}
  </ul>

    </>
  )
}
