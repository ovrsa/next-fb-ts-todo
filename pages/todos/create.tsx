import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'


export default function AddTodoForm({
  todo,
  onAddFormSubmit,
  onAddInputChange,
}: {
  todo: any
  onAddFormSubmit: any
  onAddInputChange: any
}) {
  const unCreatable = todo === ''
  const [filter, setFilter] = useState('notStarted')
  const [posts, setPosts] = useState([]);


  return (
    <>
      <Head>
        <title>Todo作成</title>
      </Head>
      {/* <h1>Create</h1>

      <div className="App">
        <form>
          <div> 
            <input />
          </div>
        </form>
      </div> */}

      <form onSubmit={onAddFormSubmit}>
      <h2>Create</h2>
      <label htmlFor="todo"></label>

        <input
          style={{ marginRight: "5px" }}
          name="todo"
          type="text"
          placeholder="タスク名"
          value={todo}
          onChange={onAddInputChange}
          autoFocus
          onChangeCapture={(e) => setPosts(e.target.value)}
        />
        <textarea 
        name="text"
        value={todo}
        onChange={onAddInputChange}
        >
        </textarea>
        
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="notStarted">着手前</option>
          <option value="inProgress">進行中</option>
          <option value="done">完了</option>
        </select>

        <button
          type="submit"
          onClick={onAddFormSubmit}
          disabled={unCreatable}
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
