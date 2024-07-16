
import Link from "next/link";
import BlogCard from "./_components/BlogCard";



  export default async function Home() {
 
 const blogs: Blog[] = await fetch('http://localhost:3001/blogs',{cache: 'no-store'}).then(res => res.json())
  return (
   
    <main className="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 min-h-screen  items-center justify-between ">
    
    {
        blogs.map((blog) => <Link href={`/blog/${blog.id}`} key={blog.id}><BlogCard blog={blog} /></Link>
        )}
      
    </main>
  );
}
