import React, { useEffect, useState } from 'react'
import getAllinspectors from '../../CompanyApi/inspector/getallInspectors';
import deleteinspector from '../../CompanyApi/inspector/deleteInspector';

export default function InspectorCard({setShowEdite,Inspector,setInspector }) {
    



  const handleShowEdite = () => {
    setShowEdite((prev) => !prev);
  };


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

  const handleDeleteInspector = async (id) => {
    try {
      await deleteinspector(id);
      const updatedReviewer = Inspector.filter(item => item.id !== id);
      setInspector(updatedReviewer);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

    return (
        <>
    
        {Inspector.map((inspector) => (
           <div className="rounded-xl shadow-2xl border border-gray-300 p-6 space-y-4 mt-6">
           <div className="relative flex items-center gap-4">
             <div>
               <img
                 src="/inspector.png"
                 alt="صورة"
                 className="w-24 h-24 rounded object-cover"
               />
             </div>
             <div>
               <h2>{inspector.username}</h2>
              
             </div>
    
             <div className="absolute -top-3 -left-4 bg-primary text-white py-2 px-6 rounded-full flex items-center justify-center">
               <span>مدقق</span>
             </div>
           </div>
    
           <button
             className="bg-primary text-white py-2 px-4 rounded w-full"
             onClick={handleShowEdite}
           >
             تعديل
           </button>
           <div className="">
             <button className="w-full bg-primary text-white py-2 px-4 rounded" onClick={() => handleDeleteInspector(inspector.id)}>
               حذف
             </button>
             
           </div>
         </div>
        ))}
         
         </>
      );
}
