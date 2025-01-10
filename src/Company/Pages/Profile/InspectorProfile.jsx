import React, { useEffect, useState } from 'react'
import spacialInspector from '../../CompanyApi/inspector/spacialInspector';
import { useParams } from 'react-router-dom';


export default function InspectorProfile() {
    const [inspector,setInspector] = useState(null)
    const {id} =useParams()
    useEffect(() => {
        // Fetch data from API
        const getSpecialInspector = async (id) => {
          try {
            const response = await spacialInspector(id);
           setInspector(response);
           
           
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        getSpecialInspector(id);
      }, []);
  return (
    <div className='mt-4 space-y-4'>
    <h2>معلومات الملف الشخصي</h2>
{inspector && (
    <div className='rounded-lg border border-gray-300 shadow-2xl '>
    <div className='bg-[#D1E8E24D] p-4 flex gap-4 items-center'>
    <div className='w-20 h-20 rounded-full overflow-hidden'> 
        <img src='/inspector.png' alt=''/>
    </div>
    <h2>{inspector.username}</h2>
    
    </div>
    
    <div className='p-4 space-y-2'>
    <p className='text-lg font-bold'>رسوم المعاينة</p>
    <div className='border rounded-lg p-2 text-primary w-1/2'>5,000 ريال</div>
    </div>
    
    <div className='p-4 space-y-2'>
    <p className='text-lg font-bold'>سنوات الخبرة</p>
    <div className='border rounded-lg p-2 text-primary w-1/2'>{inspector.years_of_experience}</div>
    </div>
    <div className='p-4 space-y-2'>
    <p className='text-lg font-bold'>مجال الخبرة</p>
    <div className='border rounded-lg p-2 text-primary w-1/2'>{inspector.experience}</div>
    </div>
    
    <div className='p-4 space-y-2'>
    <p className='text-lg font-bold'>الهاتف</p>
    <div className='border rounded-lg p-2 text-primary w-1/2'>
    <span className='bg-[#D1E8E24D] py-1 px-6 rounded-full'>{inspector.phone}</span>
    </div>
    </div>
    
    <div className='p-4 space-y-2'>
    <p className='text-lg font-bold'>معلومات تعريفية</p>
    <div className='border rounded-lg p-2 text-primary w-1/2'>ملتزم بالمواعيد واحترم عملي واجيد التعامل</div>
    </div>
    
    
    </div>
)}

</div>
  )
}
