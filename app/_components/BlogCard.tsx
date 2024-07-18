
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import {  useRouter } from 'next/navigation';
import { Alert, Snackbar } from '@mui/material'
import { CgSpinner } from 'react-icons/cg'

const BlogCard = (
  { blog }: Props
  
) => {
  const router = useRouter();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  // const [snackbarMessageError, setsnackbarMessageError] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = async () => {
    setOpen(false)
  }
  // const handleDeleteClose = async () => {
  //   setIsOpen(false)
  // }
  return (
    <div className="flex  flex-col p-3  border rounded-2xl m-6 shadow-xl   ">
      <div className="flex justify-between items-center text-black">
        <h2 className=" text-2xl font-bold font-serif mb-2">{blog.title}</h2>
      </div>

      <p className="text-md font-serif  text-black">{blog.description}</p>

      <p className="text-lg font-serif  text-black font-semibold ">Author:{blog.author}</p>
      
      <div
          className='flex gap-2 justify-end'>
          <Link href={`/edit/${blog.id}`} >
            <button className=' flex  items-center gap-2 w-fit text-xl  text-yellow-500 border-yellow-600 p-1 border rounded'>
            <FaEdit />
          </button>
        </Link>
        {
          loading ? <div className='flex justify-center flex-row' >
            <CgSpinner color="blue" className='w-6 h-6 text-2xl  animate-spin ' /> </div> :
        <button
          onClick={async (e) => {
        
            e.preventDefault();
            try {
             setLoading(true);
                  await fetch(`http://localhost:3001/blogs/${blog.id}`, {
                    method: "DELETE",
                  
                  })
              setLoading(false)
               setSnackbarMessage('Blog deleted successfully');
              setOpen(true);
              await fetch("http://localhost:3001/blogs")
             
              router.refresh();
        
              
            } catch (error) {
              setsnackbarMessageError(error.message);
              setLoading(false);
            }
          }}
          className=' flex  items-center gap-2 w-fit text-red-500  text-xl border p-1 border-red-600 rounded'>
          <MdDelete />
          
        </button>
           }
      
      </div>
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
         {/* <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleDeleteClose}>
        <Alert
          onClose={handleDeleteClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMessageError}
        </Alert>
      </Snackbar> */}
     </div>
        
  )
}

interface Props {
  blog: Blog
}
export default BlogCard