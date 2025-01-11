import React from 'react'
import { Link } from 'react-router-dom'

export default function AssignedReviewer({setshowPRiviewers}) {
  return (
    
        <div className='bg-[#D1E8E24D] border-b-2 border-b-[#8B94C6] p-4 flex items-center justify-between  '>
               
             <div className='flex gap-2 items-center'>
             <div className='w-20 h-20'>
                 <img src='/inspector.png' alt="" className='w-full h-full rounded-xl'/>
                </div>
               <div>
               <h2>اسم الموظف</h2>
               <p>رسوم المعاينه : <span className='text-primary'>500 ريال</span></p>
               </div>
             </div>
                <div className='flex flex-col items-start space-y-2 justify-between'>
                 <div className='flex gap-4'>
                     <button className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl' onClick={() => setshowPRiviewers(true)}> اختيار معاين اخر</button>
                 </div>
                </div>
                
    </div>
  )
}
