
import BlogCard from "./_components/BlogCard";

export default async function Home() {
 
 const blogs: Blog[] = await fetch('http://localhost:3001/blog').then(res => res.json())
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between ">
    
    {
        blogs.map((blog) => <BlogCard blog={blog} key={blog.id} />)}
      
    </main>
  );
}
