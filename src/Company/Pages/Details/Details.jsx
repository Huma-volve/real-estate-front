import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoMdCloudUpload } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import getAllSpecialProjects from '../../CompanyApi/projects/spacialProject';

export default function Details() {
 const [project,setProject] = useState(null)

  
  const { id } = useParams();
  
useEffect(() => {
  // Fetch data from API
  const SpecialProjects = async (id) => {
    try {
      const response = await getAllSpecialProjects(id);
     setProject(response);
     
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  SpecialProjects(id);
}, []);

 

  return <>
  <section className='w-full space-y-4 py-6 '>
{project  ? (
   <div>
   <div className=' text-xl font-bold mb-4 space-y-2'>
   <span>{project.property.address}</span> <span>{project.property.city}</span>
</div>
   
   <div className='grid grid-cols-12 rounded-xl gap-2 overflow-hidden min-h-[330px]'>
   <div className='col-span-12 md:col-span-6'>
       <img src={project.property.images[0].path} alt='' className='w-full h-full'/>
   </div>
   <div className='md:col-span-3 col-span-6 '>
      <div className='mb-2 h-1/2 '>
      <img src={project.property.images[1].path} alt='' className='w-full  h-full'/>
      </div>
      <div className='h-1/2'>
      <img src={project.property.images[2].path} alt='' className='w-full h-full'/>
      </div>
   
   </div>
   <div className='md:col-span-3 col-span-6 '>
      <div className='mb-2 h-1/2 '>
      <img src={project.property.images[3].path} alt='' className='w-full  h-full'/>
      </div>
      <div className='h-1/2'>
      <img src={project.property.images[4].path} alt='' className='w-full h-full'/>
      </div>
   
   </div>
   </div>
   
   
   {/*  */}
   <div className='space-y-2  rounded-2xl my-4 border shadow-xl px-6 pt-6 pb-20  '>
   
     <p className='text-primary text-xl font-bold'>{project.property.price}ريال سعودي</p>
     <p>{project.property.description}</p>
   
   <p className='text-primary font-bold'>ألنوع</p>
   <p>{project.property.type}</p>
   
   <p className='text-primary font-bold'>المساحه</p>
   <p>{project.property.area}</p>
   
   <p className='text-primary font-bold'>المدينه </p>
   <p>{project.property.region}</p>
   
   <p className='text-primary font-bold'>المنطقه</p>
   <p> {project.property.city}</p>
   
   
   {/* form */}
   
   <div className='md:w-1/2  mx-auto pt-20'>
   <form className='space-y-4'>
     <label for='note'>ملاحظات</label>
     <textarea type='text' id='note' name='note' placeholder='ملاحظات' className='w-full border border-gray-300 rounded-lg px-4 py-2 '/>
     <button type='submit' className='bg-primary text-white py-2 px-4 rounded w-full'>اضف ملاحظه</button>
   </form>
   
   
   {/* butons */}
   
   <div className='md:flex space-y-4 md:space-y-0 gap-6 justify-between mt-4'>
   <div className='md:w-1/2'>
   <Link to={"/company/projects/chooseTeam"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>اختيار فريق</Link>
   </div>
   
   <div className='md:w-1/2'>
     <Link to={"/company/projects/comments" + "/" + project.id} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>التعليقات </Link></div>
   </div>
   
   <div className='md:flex space-y-4 md:space-y-0 gap-6 justify-between mt-4'>
   <div className='md:w-1/2'>
   <Link to={"/company/projects/TeamReport"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>تقارير الفريق</Link>
   </div>
   
   <div className='md:w-1/2'>
   <Link to={"/company/projects/companyReport"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>كتابه التقييم</Link>
   </div>
   </div>
   
   </div>
   
   
   {/* file */}
   
   <div className='md:w-1/2  mx-auto pt-6  flex flex-col gap-4'>
     <p>الملف التعريفي للشركه /ملحقات</p>
     <div className='py-4 px-6  flex flex-col items-center md:flex-row justify-evenly  rounded border border-gray-300'> 
      <div className=''>
      <p className='text-primary font-bold '>تحميل ملف</p>
      <IoMdCloudUpload className='inline-block ml-6 text-6xl text-primary' />
      </div>
    <div> <p className='mb-6'>اختار ملف للتحميل من جهازك</p>
     <input type="hidden" name="MAX_FILE_SIZE" value="1000000" />
    
     <label
       htmlFor="file"
       className="cursor-pointer  py-2 px-12 rounded-lg bg-[#D1E8E2] border-dashed border-2 border-gray-300"
     >
       اختار ملف
     </label>
     
   
     <input
       id="file"
       type="file"
       name="file"
       accept=".pdf,.docx,.xlsx"
       className="hidden"
     /></div>
     </div>
   
     <button type="submit" className='bg-primary text-white py-2 px-4 rounded w-full'>انهاء المشروع</button>
   </div>
   </div>
   </div>
):""}
 

  </section>
  </>
}