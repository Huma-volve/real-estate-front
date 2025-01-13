import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function ChooseArtist() {
    const navigate = useNavigate()
     return (
    <div className='w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 ' >
        <div className='w-[35%] max-[660px]:w-[85%] max-[1260px]:w-[50%]  max-[800px]:w-[75%] rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 space-y-4 text-center '>
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
            <h2>اختار رسام</h2>
      {/* card */}
            <div className='rounded-xl border border-gray-300 shadow-2xl flex gap-4 p-4'>
       <div className='w-20 h-20'>
        <img src='/inspector.png' alt="" className='w-full h-full rounded-xl'/>
       </div>
    
       <div className='flex flex-col items-start space-y-2 justify-between'>
        <h2 className='text-xl font-bold'>اسم الموظف</h2>
        <p>رسوم المعاينه : <span className='text-primary'>500 ريال</span></p>
        <div className='flex gap-4'>
            <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl'>اختيار</button>
            <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl ' onClick={() => navigate('/company/projects/profile')}>مشاهده الحساب</button>
    
        </div>
       </div>
       </div>
        </div>
        
            </div>
    
    
    
       
    
           
       
      )
}
