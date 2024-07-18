
 "use client";
 import { useEffect, useState } from 'react';

import {  useRouter } from 'next/navigation';
import { CgSpinner } from 'react-icons/cg';
import { Alert, Snackbar } from '@mui/material';
 
 const EditBlogPage = ({ params }) => {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   const router = useRouter();
   const [snackbarMessage, setSnackbarMessage] = useState('');
   const [open, setOpen] = useState(false);
   const [blog, setBlog] = useState({
     title: "",
     description: "",
     author: "",
   });
 
   useEffect(() => {
     const getBlog = async () => {
       try {
         setLoading(true);
         const response = await fetch(`http://localhost:3001/blogs/${params.id}`);
         if (!response.ok) {
           throw new Error('Failed to fetch blog');
         }
         const data = await response.json();
         setBlog(data);
         setLoading(false);
       } catch (error) {
         setError(error.message);
         setLoading(false);
       }
     };
   
       getBlog();
     
   }, [params.id]);
 
   const handleEdit = async (e) => {
     e.preventDefault();
     const title = e.target.title.value;
     const description = e.target.description.value;
     const author = e.target.author.value;
     console.log({ title, description, author });
 
     try {
       setLoading(true);
 
       const response = await fetch(`http://localhost:3001/blogs/${params.id}`, {
         method: "PATCH",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ title, description, author }),
       });
 
       if (!response.ok) {
         throw new Error('Failed to update blog');
       }
 
       setLoading(false);
       await fetch("http://localhost:3001/blogs/",)
       setSnackbarMessage('Blog updated successfully');
       setOpen(true);
    
        router.push("/");
         router.refresh();
    
     } catch (error) {
       setError(error.message);
       setLoading(false);
     }
   };
 
   const handleClose = () => {
     setOpen(false);
   }
   return (
     <div className='flex flex-col justify-center items-center p-2'>
       <h1 className='text-lg mb-5 font-bold text-slate-900'>Edit blog post</h1>
 
       <form
         id='edit-blog'
         onSubmit={handleEdit}
         className='flex flex-col gap-2 border border-gray-900 shadow-md rounded-2xl p-3'
       >
         <input
           className='border text-black border-gray-900 rounded-md p-1 w-full'
           type='text'
           name='title'
           id='title'
           defaultValue={blog.title}
           placeholder='Blog Title'
         />
         <textarea
           defaultValue={blog.description}
           name='description'
           id='description'
           className='border text-black border-gray-900 rounded-md p-1 w-full'
           placeholder='Blog Description'
         />
         <input
           name='author'
           id='author'
           defaultValue={blog.author}
           className='border text-black border-gray-900 rounded-md p-1 w-full'
           type='text'
           placeholder='Author Name'
         />
         {loading ? <div className='flex justify-center flex-row'>
           <CgSpinner color="blue" className='w-6 h-6 text-2xl align-middle animate-spin items-center'/>
         </div>:<button
           type='submit'
           className='bg-blue-500 text-white rounded-md p-2 w-full transition-all hover:bg-blue-600'
         >
           Edit Blog
         </button>
         }
       </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
     </div>
   );
 };
 
 export default EditBlogPage;
 
