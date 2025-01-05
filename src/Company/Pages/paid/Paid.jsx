import React from 'react'

export default function Paid() {
  return <>
  <section className='container-main'>
   <div>
   <div className='grid grid-cols-3 gap-4'>
    {/* card */}
       <div className='space-y-2 p-1 rounded border border-gray-300 shadow-2xl hover:bg-primary group hover:text-white transition-all duration-300'>
       <div className='relative'>
            <img  src='public/v987-09.jpg' alt='' className='w-full h-full'/>
            <div  className='absolute top-3 left-3 bg-[#45ED0A] border-2 border-white rounded-full  text-white px-6 py-2 text-sm font-bold '>مدفوع</div>
        </div>

        <div className='space-y-2 p-4'>
            <p>عقار في شارع السند ، حي النرجس ، الرياض ، منطقة الرياض</p>
            <p className='text-primary text-xl font-bold group-hover:text-white'>85,000 ريال سعودي</p>
            <p className='line-clamp-2'>تتكون من صالة ومجلس وثلاث غرف نوم ومطبخ وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م</p>
        </div>
       </div>
       {/*  */}
    </div>
   </div>


  </section>
  </>
}
