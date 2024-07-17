
import Link from "next/link";
import BlogCard from "./_components/BlogCard";
import { Fab } from "@mui/material";
import { IoMdAdd } from "react-icons/io";



  // export const revalidate = 5
  export default async function Home() {
  


 const blogs: Blog[] = await fetch('http://localhost:3001/blogs',{cache: 'no-store'}).then(res => res.json())
  return (
   
    <main className="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 min-h-screen  items-center justify-between ">
    
    {
        blogs.map((blog) => <Link href={`/blog/${blog.id}`} key={blog.id}><BlogCard blog={blog} /></Link>
        )}
      <Link href="/add"><Fab className="fixed bottom-10 right-10 cursor-pointer bg-sky-400 text-blue-900"  aria-label="add"><IoMdAdd size={32} /></Fab></Link>
    </main>
  );
}
