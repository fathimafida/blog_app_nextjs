
"use client"
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const BlogCard = (
    {blog}: Props
) => {
  return (
    <div className="flex  flex-col p-3  border rounded-2xl m-6 shadow-xl   ">
      <div className="flex justify-between items-center text-black">
        <h2 className=" text-2xl font-bold font-serif mb-2">{blog.title}</h2>
      </div>

      <p className="text-md font-serif  text-black">{blog.description}</p>

      <p className="text-lg font-serif  text-black font-semibold ">Author:{blog.author}</p>
        <div
          className='flex gap-2 justify-end'>
          <Link href={`/edit`} >
            <button className=' flex  items-center gap-2 w-fit text-xl  text-yellow-500 border-yellow-600 p-1 border rounded'>
            <FaEdit />
          </button>
        </Link>
          
        <button
          onClick={async (e) => {
            // alert("Are you sure you want to delete this blog?")
            e.preventDefault();
            try {

                  await fetch(`http://localhost:3001/blogs/${blog.id}`, {
                    method: "DELETE",
                  
                  })
              // alert("Blog deleted successfully")
              await fetch("http://localhost:3001/blogs")
              
            } catch (error) {
            alert("Cannot delete blog")
            }
          }}
          className=' flex  items-center gap-2 w-fit text-red-500  text-xl border p-1 border-red-600 rounded'>
          <MdDelete />
          
        </button></div>

        </div>
  )
}

interface Props {
  blog: Blog
}
export default BlogCard