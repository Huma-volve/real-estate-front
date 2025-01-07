import { useFormik } from 'formik';
import React from 'react'
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import * as yup from "yup"
import editepersonalInfo from '../../CompanyApi/Setting/EditePersonalinfo';
import toast from 'react-hot-toast';

export default function PersonalInfo() {




  const validationSchema = yup.object({
       
    username: yup
    .string()
    .required("اسم المستخدم مطلوبة"),
    email: yup
    .string()
    .required("البريد الالكتروني مطلوب")
    .email("البريد الالكتروني غير صحيح"),
    phone_number: yup
    .string()
    .required("رقم الهاتف مطلوب")
    .matches(
      
    ),

});

const formik = useFormik({
  initialValues: {
    username: "",
  email: "",
  phone_number:""
  },
  validationSchema,
  onSubmit: async (values) => {
    let id;
    try {
      id = toast.loading("Waiting...");
      const log = await editepersonalInfo(values);
      toast.dismiss(id);
      toast.success("تم تغيير المعلومات الشخصية بنجاح");
    } catch (error) {
      toast.dismiss(id);
      toast.error(error.message || "خطاء في تغيير المعلومات الشخصية");
    } finally {
      
    }
  },
});
  return (
    <div className='container-main rounded-xl border border-gray-300 shadow-xl my-4 p-6'>
      <form className='w-1/2 m-auto space-y-2' onSubmit={formik.handleSubmit}>
      <div className='space-y-4'>
          <label htmlFor='username' className='block text-gray-700 font-bold '>اسم الشركه</label>
          <div className='relative'>
          <input type="text" id='username' name='username' className='inpute-main pr-10' value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='اسم الشركه' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <FaUserAlt />

          </div>
      </div>
      </div>
      <div className='space-y-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold '>البريد الالكتروني </label>
          <div className='relative'>
          <input type="email" id='email' name='email' className='inpute-main pr-10' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email } placeholder='commpany@yahoo.com' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <MdOutlineMail />

          </div>
      </div>
      </div>

      <div className='space-y-4'>
          <label htmlFor='phone_number' className='block text-gray-700 font-bold '>رقم الجوال</label>
          <div className='relative'>
          <input type="text" id='phone_number' name='phone_number' className='inpute-main pr-10' value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='+966 50 569 1238' />
          <div className='absolute top-1/2 right-4 text-xl text-gray-300 transform -translate-y-1/2'>
          <FaPhone />
          </div>
      </div>
      </div>

      <div className='space-y-4'>
          <label htmlFor='city' className='block text-gray-700 font-bold '>اختر المدينه </label>
          <div className=''>
          <select  id='city' name='city' className='inpute-main text-gray-400 '>
              <option>الرياض</option>
              <option>جدة</option>
          </select>
         
      </div>
      </div>

      <button className='btn-main' type='submit'>تعديل</button>
      </form>
    </div>
  )
}
