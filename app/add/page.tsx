
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const AddBlogPage = ({blog}) => {
  const router = useRouter(); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const author = e.target.author.value;
    console.log({ title, description, author });

    try {
      setLoading(true);

    
      await fetch("http://localhost:3001/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, author }),
      });

      setLoading(false);
      await router.push("/");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  
  return (
    <div
      className='flex flex-col justify-center items-center p-2'
    >
      <h1 className='text-lg mb-4 font-bold text-slate-900'>
        Add blog
      </h1>
      {/* <p className='text-slate-700 mb-2'>
       {`we are `}
      </p> */}
      <form
        id='add-blog'
      onSubmit={handleSubmit}
        className='flex flex-col gap-2 border border-gray-900 shadow-md rounded-2xl p-3'
      >
        <input
          className='border text-black border-gray-900 rounded-md p-1 w-full'
          type="text"
          name='title'
          id="title"
          placeholder='Blog Title'
        />
        <textarea
          name='description'
          id='description'
          className='border text-black border-gray-900 rounded-md p-1 w-full'
          placeholder='Blog Description'
        />
        <input
          name='author'
          id='author'
          className='border text-black border-gray-900 rounded-md p-1 w-full'
          type="text"
          placeholder='Author Name'
        />
        {loading ? <CgSpinner color="blue" className='w-6 h-6 text-2xl  animate-spin items-center'/>:<button
          type='submit'
          className='bg-blue-500 text-white rounded-md p-2 w-full transition-all hover:bg-blue-600'
        >
          Add Blog
        </button>
        }
        
      </form>
    </div>
  );
};

export default AddBlogPage;

