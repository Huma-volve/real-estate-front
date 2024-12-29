import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return<>
  <section className='w-[90%] m-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className='p-1 rounded bg-white shadow-xl'>
        {/* image */}
        <div className='relative'>
            <img src='/v987-09.jpg' alt='' className='w-full'/>
            <p  className='bg-[#C29062] rounded-full text-white absolute top-2 left-3  border border-white px-6 py-2 text-sm font-bold'>جديد</p>
        </div>

        <div className='pb-4 p-2 space-y-1'>
            <h2>عقار ف شارع السند</h2>
            <p className='text-[#C29062] text-xl font-bold'> 85.0000 ريال سعودي</p>
            <p className='text-blue-400'>تتكون من صاله ومجلس</p>
          <div className='w-full flex justify-center items-center'>
          <button className='w-full bg-gradient-to-r from-[#C29062] to-[#000000] text-white rounded py-2 px-3 bg-red-300 '>مشاهده التفاصيل</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}
