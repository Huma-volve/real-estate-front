import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import getAllinspectors from '../../CompanyApi/inspector/getallInspectors';
import assignInspector from '../../CompanyApi/inspector/assigninspector';
import toast from 'react-hot-toast';

export default function ChooseArtist({setassigned2,setshowArtist,setInspectorassigned}) {
    const [inspector, setInspector] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        // Fetch data from API
        const fetchAllInspectors = async () => {
          try {
            const response = await getAllinspectors();
            setInspector(response);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchAllInspectors();
      }, []);


      const assigned = async (id) => {
        try {
          await assignInspector(id);
         toast.success("تم تعيين المدقق بنجاح");
         setInspectorassigned(false);
         setassigned2(true);
         setshowArtist(false);
        } catch (error) {
          console.error('خطأ أثناء تعيين المراجع:', error);
        }
      };
     return (
    <div className='w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 ' >
        <div className='w-[35%] max-[660px]:w-[85%] max-[1260px]:w-[50%]  max-[800px]:w-[75%] rounded-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 space-y-4 text-center '>
         <div className='  flex flex-col items-center  mb-4'>
            <div className='bg-primary p-4 rounded-full w-fit relative'>
            <FaUserCircle className='text-4xl text-white' />
            <div className='w-2 h-2 bg-primary rounded-full absolute top-full'></div>
            <div className='w-1 h-1 bg-primary rounded-full absolute left-full '></div>
            <div className='w-1 h-1 bg-primary rounded-full absolute bottom-full '></div>
            <div className='w-3 h-3 bg-primary rounded-full absolute bottom-full right-[70%] '></div>
            <div className='w-1 h-1 bg-primary rounded-full absolute  right-full'></div>
            <div className='w-1 h-1 bg-primary rounded-full absolute bottom-[60%] -left-2'></div>
            </div>
            </div>
            <h2>اختار مدقق</h2>
      {/* card */}
         {inspector.map((inspector) => (
            
                <div className='rounded-xl border border-gray-300 shadow-2xl flex gap-4 p-4'>
                <div className='w-20 h-20'>
                 <img src='/inspector.png' alt="" className='w-full h-full rounded-xl'/>
                </div>
             
                <div className='flex flex-col items-start space-y-2 justify-between'>
                 <h2 className='text-xl font-bold'>{inspector.username}</h2>
                 <p>رسوم المعاينه : <span className='text-primary'>500 ريال</span></p>
                 <div className='flex gap-4'>
                     <Link to={""} className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl' onClick={() => assigned(inspector.id)}>اختيار</Link>
                     <Link to={'/company/projects/inspectorprofile' + "/" + inspector.id} className='btn-main bg-gradient-to-l from-[black] to-primary w-fit px-10 rounded-xl '>مشاهده الحساب</Link>
             
                 </div>
                </div>
                </div>
            
               
         ))}
        </div>
        
            </div>
    
    
    
       
    
           
       
      )
}
