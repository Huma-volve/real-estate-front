import React, { useEffect, useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as yup from 'yup';
import toast from 'react-hot-toast';

import getAllComments from '../../CompanyApi/Comments/getAllComments';
import creatComments from '../../CompanyApi/Comments/CreateComment';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const projectId = 9; // ID of the project

  useEffect(() => {
    // Fetch data from API
    const fetchAllComments = async () => {
      try {
        const response = await getAllComments(projectId);
        setComments(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllComments();
  }, [projectId]);

  const validationSchema = yup.object({
    comment: yup.string().required("التعليق مطلوب"),
  });

  
  const formik = useFormik({
    initialValues: {
      comment: "", 
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
    
      let toastId;
    
      try {
        toastId = toast.loading("انتظر...");
        const response = await creatComments(projectId, values); 
        toast.dismiss(toastId);
        toast.success("تم إضافة التعليق بنجاح");
        
        setComments((prev) => [...prev, response]); 
        resetForm(); 
      } catch (error) {
        toast.dismiss(toastId);
        toast.error(error.message || "خطأ أثناء إضافة التعليق");
      }
    },
  });

  return (
    <div className='mt-4 rounded-lg shadow-lg border border-gray-300'>
      <div className="min-h-screen p-4">
        {comments && comments.map((comment) => (
          <div
            className='p-4 mb-4 bg-[#F1F8F6] w-fit rounded-[20px] rounded-tr-none'
            key={comment.id}
          >
            {comment.comment}
          </div>
        ))}
      </div>

      <div className="bg-[#F1F8F6] p-6 rounded flex gap-4">
        <form className='w-full flex gap-2' onSubmit={formik.handleSubmit}>
          <button
            type='submit'
            className='w-10 h-10 text-white text-2xl bg-primary rounded-full flex justify-center items-center'
          >
            <FaTelegramPlane />
          </button>
          <input
            type="text"
            name='comment'
            value={formik.values.comment}
            onChange={formik.handleChange}
            className="inpute-main bg-[#F1F8F6] outline-none w-full"
            placeholder="كتابة تعليق ..."
          />
        </form>
      </div>
    </div>
  );
}
