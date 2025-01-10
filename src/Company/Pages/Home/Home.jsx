import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import getAllProjects from '../../CompanyApi/projects/getallProjects';

export default function CompanyHome() {
  const [property,setProperty] = useState([])


  useEffect(() => {
    // Fetch data from API
    const fetchAllPropertys = async () => {
      try {
        const response = await getAllProjects();
        setProperty(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchAllPropertys();
  }, []);
  return<>
  <section className='mt-4'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3'>
      {property.map((property) => (
        <div key={property.id} className=' rounded bg-white shadow-xl hover:bg-gradient-to-br from-primary via-primary to-[#000000]  hover:text-white transition-all duration-300'>
        {/* image */}
        <div className='relative p-1'>
            <img src={property.property.images[0].path} alt='' className='w-full'/>
            <p  className='bg-primary rounded-full text-white absolute top-2 left-3  border border-white px-6 py-2 text-sm font-bold'>جديد</p>
        </div>

        <div className='space-y-1 pb-4 hover:text-white'>
           <div className='p-2 '> <h2>{property.property.address}</h2>
            <p className='text-primary text-xl font-bold'> {property.property.price}ريال سعودي</p>
            <p className=' line-clamp-2'>{property.property.description}</p>
            </div>
          <div className='flex justify-center items-center bg-white p-2'>
          <Link   to={'/company/projects/details/' + property.property.id } className='w-full bg-gradient-to-r text-center from-primary to-[#000000] text-white rounded py-2 px-3 bg-red-300 '>مشاهده التفاصيل</Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  </section>

  <Outlet />
  
  </>
}
