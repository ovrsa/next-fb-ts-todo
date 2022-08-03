import type { NextPage } from 'next'
import Link from 'next/link'
import { FirebaseError } from 'firebase/app'


const todoId: NextPage = () => {
  return (
    <div>
      <h2>Todo Detail</h2>
      <Link href="../todos">Back</Link>
      {/* idが当てはまるrecoilの値を抽出 */}

    </div>
  )
}

export default todoId