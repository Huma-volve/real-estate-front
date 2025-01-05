import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
import EditePassword from './EditePassword';
import PersonalInfo from './PersonalInfo';

export default function Seting() {
     const [activeTab, setActiveTab] = useState("");
  return <>
  <section className='  py-4'>
   <div className='flex flex-col items-center py-8 '>
   <div className="bg-primary p-4 rounded-full w-fit">
                <FaRegUserCircle className="text-4xl text-white" />
              </div>
              <h2 className='text-3xl font-bold text-primary'>اداره الملف الشخصي</h2>
   </div>


     {/* edite personal info */}
           <div
             className={
               activeTab === "personalInfo"
                 ? "flex items-center justify-between w-full bg-gradient-to-l text-white from-black to-[#C29062] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
                 : "flex items-center justify-between w-full p-6 border-b-2 border-b-[#8B94C6] cursor-pointer bg-[#D1E8E24D]"
             }
             onClick={() => setActiveTab("personalInfo")}
           >
             <p className="text-2xl font-bold">تعديل معلومات الملف الشخصي</p>
             <p className="text-2xl font-bold">
               <RiEdit2Fill />
             </p>
           </div>
   
           {activeTab === "personalInfo" && (<PersonalInfo/>)}
   
           {/* edite password */}
           <div
             className={
               activeTab === "password"
                 ? "flex items-center justify-between w-full bg-gradient-to-l text-white from-black to-[#C29062] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
                 : "flex items-center justify-between w-full bg-[#D1E8E24D] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
             }
             onClick={() => setActiveTab("password")}
           >
             <p className="text-2xl font-bold">تعديل كلمة المرور</p>
             <p className="text-2xl font-bold">
               <RiEdit2Fill />
             </p>
           </div>
           {activeTab === "password" &&  (<EditePassword/>)}
          
   
  </section>
  
  
  </>
}
