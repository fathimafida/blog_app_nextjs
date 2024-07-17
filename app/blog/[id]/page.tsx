import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdEdit } from 'react-icons/md'


interface Props {
    params: {
        id:String
    }
}
const BlogDetailPage = async({
    params 
}: Props) => {
    const blog : Blog = await fetch(`http://localhost:3001/blogs/${params.id}`).then(res => res.json())
  return (
      <div
          key={blog.id}
      className="flex  flex-col p-3  border rounded-2xl m-6 shadow-xl      ">
      
      <div className="flex justify-between items-center">
        <h2 className=" text-2xl font-bold text-black font-serif mb-2">{blog.title}</h2>
        
      </div>

      <p className="text-md  text-black  font-serif">{blog.description}</p>

      <p className="text-lg font-serif  text-black  font-semibold ">Author:{blog.author}</p>

   
        </div>
  )
}

export default BlogDetailPage
