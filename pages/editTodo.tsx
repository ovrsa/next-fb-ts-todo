import Link from "next/link"

export default function Edit({
  newTitle,
  handleEditFormChanges,
  handleEditTodo,
  handleCloseEditForm
}
  :{newTitle:any,
    handleEditFormChanges:any,
    handleEditTodo:any,
    handleCloseEditForm:any}
) {

  return (
    <>
    <Link
    href={{
      pathname: '/posts/[id]/edit',
      query: { post: 'post-1', comment: 'comment-1' },
    }}
  >
    
      <h1>edit</h1>
    </Link>

    <input
      type='text'
      label='新しいタイトル'
      value={newTitle}
      onChange={handleEditFormChanges}
    />
    <button onClick={()=>handleEditTodo}>編集を保存</button>
    <Link href="././pages/todos">
      <button onClick={()=>handleCloseEditForm}>キャンセル</button>
    </Link>
    </>
    
  );
}
console.log(Edit)

export {}

