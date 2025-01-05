import React from 'react'

export default function Mybalance() {
  return <>
  <section className='container-main py-8'>
<div className='flex flex-col items-center space-y-4 border border-gray-300 rounded-lg px-4 py-10 shadow-xl'>
<div>
    <img src='/Asset 7 1.png' alt=' ' className='w-full h-full'/>
</div>
<div className='px-10 py-8 bg-[#D1E8E24D] border shadow-xl rounded w-[60%] max-[470px]:w-[80%] text-center m-auto'>
    <p className='text-xl font-bold'>رصيد حسابي</p>
    <p className='text-primary font-bold text-xl'>1000000</p>
</div>

<div className='px-10 py-8 bg-[#D1E8E24D] border shadow-xl rounded w-[60%] max-[470px]:w-[80%] text-center m-auto'>
    <p className='text-xl font-bold'>رصيد مستحق</p>
    <p className='text-primary font-bold text-xl'>100000</p>
</div>
</div>

  </section>
  </>
}
