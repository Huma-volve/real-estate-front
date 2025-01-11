import React, { useEffect, useState } from "react";
import getAllReviewer from "../../CompanyApi/reviewer/getallReviewer";
import deleteReviewer from "../../CompanyApi/reviewer/deleteReviewer";

export default function ReviewerCard({ setShowEdite,reviewer,setReviewer }) {

  
  const handleShowEdite = () => {
    setShowEdite((prev) => !prev);
  };


  useEffect(() => {
    // Fetch data from API
    const fetchAllreviewer = async () => {
      try {
        const response = await getAllReviewer();
        setReviewer(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllreviewer();
  }, []);


  const handleDeleteReviewer = async (id) => {
    try {
      await deleteReviewer(id);
      const updatedReviewer = reviewer.filter(item => item.id !== id);
      setReviewer(updatedReviewer);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>

    {reviewer.map((reviewer) => (
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
           <h2>{reviewer.username}</h2>
          
         </div>

         <div className="absolute -top-3 -left-4 bg-primary text-white py-2 px-6 rounded-full flex items-center justify-center">
           <span>معاين</span>
         </div>
       </div>

       <button
         className="bg-primary text-white py-2 px-4 rounded w-full"
         onClick={handleShowEdite}
       >
         تعديل
       </button>
       <div className="">
         <button className=" w-full bg-primary text-white py-2 px-4 rounded" onClick={() => handleDeleteReviewer(reviewer.id)}>
           حذف
         </button>
         
       </div>
     </div>
    ))}
     
     </>
  );
}
