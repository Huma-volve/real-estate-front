import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

export default function Comments() {
  return (
    <div className='mt-4 rounded-lg shadow-lg border border-gray-300'>
<div className="min-h-screen p-4">
<div className='p-4 bg-[#F1F8F6] w-fit rounded-[20px] rounded-tr-none'> 
السلام عليكم
</div>
</div>

<div className="bg-[#F1F8F6] p-6 rounded flex gap-4 ">
<div className='w-10 h-10 text-white text-2xl bg-primary rounded-full flex justify-center items-center'><FaTelegramPlane /></div>
<div className='w-full'>
    <input type="text" className="inpute-main  bg-[#F1F8F6] outline-none" placeholder="كتابة تعليق ..." />
</div>
    
    
</div>



    </div>
  )
}
