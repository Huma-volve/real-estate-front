import React, { useState } from 'react'
import { CiLock } from 'react-icons/ci';
import { FaEye, FaEyeSlash, FaPhoneAlt, FaUser } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';

export default function AddPreviewer() {
    const [password, setPassword]= useState("password")
    const [confirmPassword, setConfirmPassword]= useState("password")

    const handelPassType = ()=>{
        if(password === "password"){
            setPassword("text")
        }
        else{
            setPassword("password")
        }
    }  

    const handelConfirmPassType = ()=>{
        if(confirmPassword === "password"){
            setConfirmPassword("text")
        }
        else{
            setConfirmPassword("password")
        }
    }
    return <>
   <div className='container-main'>
          <div className='flex flex-col items-center justify-center rounded-lg shadow-xl px-6 py-6 my-6 border border-gray-300'>
          <form className='w-1/2  max-[650px]:w-full space-y-4'>
          <div className="relative">
    {/* Label */}
    <label
      htmlFor="name"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
      <FaUser />
      اسم المستخدم
    </label>
  
    {/* Input */}
    <input
      type="text"
      id="name"
      name="name"
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
  
  
  <div className="relative">
    {/* Label */}
    <label
      htmlFor="phone"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
     <FaPhoneAlt />
  
  
    رقم الجوال
    </label>
  
    {/* Input */}
    <input
      type="phone"
      id="phone"
      name="phone"
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
  
  
  <div className="relative">
    {/* Label */}
    <label
      htmlFor="password"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
     <CiLock />
  
  
  
    كلمة المرور
    </label>
  
    {/* Input */}
    <input
      type={password}
      id="password"
      name="password"
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
    <div className='absolute top-1/2 left-6 transform -translate-y-1/2' >
   {password === "password" ?  <FaEye  onClick={handelPassType}/>: <FaEyeSlash onClick={handelPassType}/> }

    </div>
  </div>
  
  <div className="relative">
    {/* Label */}
    <label
      htmlFor="re_password"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
     <CiLock />
  
  
  
      تاكيد كلمة المرور
    </label>
  
    {/* Input */}
    <input
      type={confirmPassword}
      id="re_password"
      name="re_password"
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
     <div className='absolute top-1/2 left-6 transform -translate-y-1/2' >
   {confirmPassword === "password" ?  <FaEye  onClick={ handelConfirmPassType}/>: <FaEyeSlash onClick={ handelConfirmPassType}/> }

    </div>
  </div>
  
  
  
  <div>
      <textarea placeholder="اضف بيانات اخري" className='w-full border rounded-xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary '  />
  
  </div>
  
  <button type="button" className='w-full bg-primary text-white font-bold py-2 px-6 rounded-full '>اضافة</button>
  
          </form>
          </div>
      </div>
  </>
}
