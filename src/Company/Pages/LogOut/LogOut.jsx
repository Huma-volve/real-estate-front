import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function LogOut() {
    const navigate = useNavigate()
  return (
    <div className='w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 ' >
    <div className='w-[35%] max-[660px]:w-[85%]  max-[850px]:w-[60%] rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 space-y-4 text-center '>
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

        <h2>عود قريبا</h2>
        <p>هل انت متاكد من تسجيل الخروج؟</p>

        <div className='flex justify-between'>
        <button className='btn-main px-10  w-fit rounded-lg'>نعم</button>
            <button className=' btn-main px-10  w-fit rounded-lg' onClick={() => navigate('/company')}>الغاء</button>
         
        </div>
     
    
    </div>
    
        </div>
  )
}
