// import { Button } from "@nextui-org/button";
// import { Input } from "@nextui-org/input";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createBlog, getBlogList } from "../redux/slices/blogSlices";
// import { toast } from "sonner";

"use client";

import Link from "next/link";

 const NavBar = () => {
//   const [isOpen, onOpenChange] = useState(false);
//   const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center bg-black p-3 gap-4 w-full ">
      <div className="flex items-center ">
        <h1 className="text-white  text-2xl font-bold">Blogs </h1>
      </div>
      <div className="flex gap-5 justify-center items-center ">

       <Link href='/'> <h1 className=" font-bold font-serif text-white hover:scale-95">
          Home
        </h1></Link>
        <h1 className=" font-bold font-serif text-white hover:scale-95">
          About
        </h1>
        <h1 className=" font-bold font-serif text-white hover:scale-95">
          Services
        </h1>
      </div>
      

      {/* <div className="flex items-center justify-end gap-6">
       
        <img
          className="border rounded-full border-white w-12 h-12"
          src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
        ></img>
      </div> */}

    
    </div>
  );
};

export default NavBar;
