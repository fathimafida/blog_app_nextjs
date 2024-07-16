import React from 'react'

const BlogCard = (
    {blog}: Props
) => {
  return (
    <div className="flex  flex-col p-3  border rounded-2xl m-6 shadow-xl  transition-all ease duration-1000   hover:scale-125 hover:rotate-2 bg-gradient-to-tr from-blue-100 to-blue-400   ">
      <div className="flex justify-between items-center">
        <h2 className=" text-3xl font-bold font-serif mb-2">{blog.title}</h2>
      </div>

      <p className="text-lg font-serif">{blog.description}</p>

      <p className="text-xl font-serif  font-semibold ">Author:{blog.author}</p>


        </div>
  )
}

interface Props {
  blog: Blog
}
export default BlogCard