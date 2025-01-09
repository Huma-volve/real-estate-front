import React from 'react'
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

export default function PersonalInfo() {
  return (
    <div className='container-main rounded-xl border border-gray-300 shadow-xl my-4 p-6'>
      <form className='w-1/2 m-auto space-y-2'>
      <div className='space-y-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold '>اسم الشركه</label>
          <div className='relative'>
          <input type="text" id='name' name='name' className='inpute-main pr-10' placeholder='اسم الشركه' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <FaUserAlt />

          </div>
      </div>
      </div>
      <div className='space-y-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold '>البريد الالكتروني </label>
          <div className='relative'>
          <input type="email" id='email' name='email' className='inpute-main pr-10' placeholder='commpany@yahoo.com' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <MdOutlineMail />

          </div>
      </div>
      </div>

      <div className='space-y-4'>
          <label htmlFor='phone' className='block text-gray-700 font-bold '>البريد الالكتروني </label>
          <div className='relative'>
          <input type="text" id='phone' name='phone' className='inpute-main pr-10' placeholder='+966 50 569 1238' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <FaPhone />
          </div>
      </div>
      </div>

      <div className='space-y-4'>
          <label htmlFor='city' className='block text-gray-700 font-bold '>البريد الالكتروني </label>
          <div className=''>
          <select  id='city' name='city' className='inpute-main text-gray-400 '>
              <option>الرياض</option>
              <option>جدة</option>
          </select>
         
      </div>
      </div>

      <button className='btn-main'>تعديل</button>
      </form>
    </div>
  )
}
