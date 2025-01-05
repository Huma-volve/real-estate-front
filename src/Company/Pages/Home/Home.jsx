import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyHome() {
  return<>
  <section className='container-main'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className=' rounded bg-white shadow-xl hover:bg-gradient-to-br from-primary via-primary to-[#000000]  hover:text-white transition-all duration-300'>
        {/* image */}
        <div className='relative p-1'>
            <img src='/v987-09.jpg' alt='' className='w-full'/>
            <p  className='bg-primary rounded-full text-white absolute top-2 left-3  border border-white px-6 py-2 text-sm font-bold'>جديد</p>
        </div>

        <div className='space-y-1 pb-4 hover:text-white'>
           <div className='p-2'> <h2>عقار ف شارع السند</h2>
            <p className='text-primary text-xl font-bold'> 85.0000 ريال سعودي</p>
            <p className='text-blue-400'>تتكون من صاله ومجلس</p></div>
          <div className='flex justify-center items-center bg-white p-2'>
          <button className='w-full bg-gradient-to-r from-primary to-[#000000] text-white rounded py-2 px-3 bg-red-300 '>مشاهده التفاصيل</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  </>
}
