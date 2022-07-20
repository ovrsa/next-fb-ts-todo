export default function Id() {
  return <h1>Create</h1>
}
<div>
{posts.map((post) => (
  <div key={post.title}>
    <p>{post.title}</p>
    <p>{post.text}</p>
  </div>
))}
</div>

export {}
