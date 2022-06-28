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

  return (
    <>
      {/* <form onSubmit={onAddFormSubmit}>
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
      </form> */}
    </>
  )
}

export {}
