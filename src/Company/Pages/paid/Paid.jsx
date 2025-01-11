import React, { useEffect, useState } from 'react'
import getAllPaidProjects from '../../CompanyApi/paidProjects/paidProjects';

export default function Paid() {
const [paid,setpaid] =useState([])

useEffect(() => {
  // Fetch data from API
  const fetchAllpaidProjects = async () => {
    try {
      const response = await getAllPaidProjects();
      setpaid(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchAllpaidProjects();
}, []);


  return <>
  <section className=''>
   <div>
   <div className='grid grid-cols-3 gap-4'>
    {/* card */}
      {paid.map((project) => (
         <div className='space-y-2 p-1 rounded border border-gray-300 shadow-2xl hover:bg-primary group hover:text-white transition-all duration-300'>
         <div className='relative'>
              <img  src='/v987-09.jpg' alt='' className='w-full h-full'/>
              <div  className='absolute top-3 left-3 bg-[#45ED0A] border-2 border-white rounded-full  text-white px-6 py-2 text-sm font-bold '>مدفوع</div>
          </div>
  
          <div className='space-y-2 p-4'>
              <p>{project.property.address}</p>
              <p className='text-primary text-xl font-bold group-hover:text-white'>{project.price}ريال سعودي </p>
              <p className='line-clamp-2'>{project.property.description}</p>
          </div>
         </div>
      ))}
       {/*  */}
    </div>
   </div>


  </section>
  </>
}
