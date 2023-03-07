
import { AddBlog } from "./components/Blog/AddBlog/AddPost"


export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-white">Mon blog</h1>
      <AddBlog />
    </div>
  )
}
