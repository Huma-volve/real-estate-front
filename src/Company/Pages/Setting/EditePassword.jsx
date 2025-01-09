import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'

export default function EditePassword() {
    const[passType,setPassType] =useState("password")
    const[repassType,setrePassType] =useState("password")
    const[confirmpassType,setconfirmPassType] =useState("password")

    const togglePassType = () => {
        setPassType(passType === "password"? "text" : "password")
    }

    const togglerePassType = () => {
        setrePassType(repassType === "password"? "text" : "password")
    }

    const toggleconfirmPassType = () => {
        setconfirmPassType(confirmpassType === "password"? "text" : "password")
    }
  return (
    <div>
        <div className='container-main rounded-xl border border-gray-300 shadow-xl my-4 p-6'>
            <form className='w-1/2 m-auto space-y-2'>
<div className='space-y-4'>
    <label htmlFor='password' className='block text-gray-700 font-bold '>كلمه المرور الحاليه</label>
    <div className='relative'>
    <input type={passType} id='password' name='password' className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>

    {passType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglePassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglePassType} />}
    </div>
</div>
<div className='space-y-4'>
    <label htmlFor='repassword' className='block text-gray-700 font-bold '>كلمه المرور الحاليه</label>
    <div className='relative'>
    <input type={repassType} id='repassword' name='repassword' className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>

    {repassType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglerePassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglerePassType} />}
    </div>
</div>

<div className='space-y-4'>
    <label htmlFor='confirmpassword' className='block text-gray-700 font-bold '>كلمه المرور الحاليه</label>
    <div className='relative'>
    <input type={confirmpassType} id='confirmpassword' name='confirmpassword' className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>

    {confirmpassType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={toggleconfirmPassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={toggleconfirmPassType} />}
    </div>
</div>
<button className='btn-main '>تعديل</button>
            </form>
        </div>
    </div>
  )
}
