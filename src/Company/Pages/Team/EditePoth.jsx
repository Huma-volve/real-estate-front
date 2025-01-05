import React from 'react'
import {  FaUserCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

export default function EditePoth({setShowEdite}) {

  return ( 
    <div className='w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 ' >
<div className='w-[40%] max-[660px]:w-[85%] rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 space-y-4 text-center '>
 <div className='  flex flex-col items-center  mb-4'>
    <div className='bg-primary p-4 rounded-full w-fit relative'>
    <FaUserCircle className='text-4xl text-white' />
    <div className='w-2 h-2 bg-primary rounded-full absolute top-full'></div>
    <div className='w-1 h-1 bg-primary rounded-full absolute left-full '></div>
    <div className='w-1 h-1 bg-primary rounded-full absolute bottom-full '></div>
    <div className='w-3 h-3 bg-primary rounded-full absolute bottom-full right-[70%] '></div>
    <div className='w-1 h-1 bg-primary rounded-full absolute  right-full'></div>
    <div className='w-1 h-1 bg-primary rounded-full absolute bottom-[60%] -left-2'></div>
    </div>
    </div>
<h2>اضافه البريد الالكتروني</h2>
   <form  className='space-y-4'>
   <div className="relative">
     {/* Label */}
     <label
       htmlFor="email"
       className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
     >
      <MdOutlineEmail />
   
      البريد الالكتروني
     </label>
   
     {/* Input */}
     <input
       type="email"
       id="email"
       name="email"
       placeholder=" "
       className="w-full border rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
       onFocus={(e) => {
         e.target.previousElementSibling.classList.add("top-2", "-translate-y-0");
       }}
       onBlur={(e) => {
         if (!e.target.value) {
           e.target.previousElementSibling.classList.remove("top-2", "-translate-y-0", "text-primary");
         }
       }}
     />
   </div>
   <button  type='submit' className='bg-primary text-white py-2 px-4 rounded-full w-full'>ارسال</button>
   <div className='absolute top-2 right-4 text-2xl cursor-pointer' on onClick={()=>setShowEdite(false)}><IoMdClose/>
   </div>
   </form>

</div>

    </div>
  )
}
