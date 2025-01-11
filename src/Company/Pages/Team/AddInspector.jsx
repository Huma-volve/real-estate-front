import { useFormik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { CiLock } from 'react-icons/ci';
import { FaEye, FaEyeSlash, FaPhoneAlt, FaUser } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md';
import * as yup from "yup"
import addInspector from '../../CompanyApi/inspector/addInspector';

export default function AddArtist({setInspector}) {
     const [password, setPassword]= useState("password")
        const [confirmPassword, setConfirmPassword]= useState("password")
    
        const handelPassType = ()=>{
            if(password === "password"){
                setPassword("text")
            }
            else{
                setPassword("password")
            }
        }  
    
        const handelConfirmPassType = ()=>{
            if(confirmPassword === "password"){
                setConfirmPassword("text")
            }
            else{
                setConfirmPassword("password")
            }
        }

        const validationSchema = yup.object({
          username: yup.string().required("المستخدم مطلوب").min(4, "اسم المستخدم علي الاقل اربع احرف"),
          email: yup.string().email("البريد الالكتروني غير صحيح").required("البريد الالكتروني مطلوب"),
          password: yup.string().required("كلمة المرور مطلوبة").matches(
            /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
            "كلمه المرور تتكون من 8 احرف وتتضمن حرف كبير وحرف صغير"
          ),
          password_confirmation: yup.string().required("تأكيد كلمة المرور مطلوب").oneOf([yup.ref("password")],"كلمة المرور  وتاكيد كلمه المرور يجب ان تكون متطابقة"),
          phone: yup.string().matches(/^\+?\d{1,3}?[- .]?\(?\d{1,4}\)?[- .]?\d{1,4}[- .]?\d{1,4}$/, "رقم الهاتف غير صحيح").required("رقم الهاتف مطلوب"),
          data: yup.string().required("البيانات  مطلوبة")
        });
      
        
        const formik = useFormik({
          initialValues: {
            username:"",
            email: "",
            password: "",
            password_confirmation: "",
            phone: "",
            data: "" 
          },
          validationSchema,
          onSubmit: async (values, { resetForm }) => {
          
            let toastId;
          
            try {
              toastId = toast.loading("انتظر...");
              const response = await addInspector(values); 
              toast.dismiss(toastId);
              toast.success("تم اضافه المدقق بنجاح");
              setInspector((prev) => [...prev, response]);
              resetForm(); 
            } catch (error) {
              toast.dismiss(toastId);
              toast.error(error.message || " خطاء في اضافة المدقق");
            }
          },
        });


  return (
    <div className='container-main'>
        <div className='flex flex-col items-center justify-center rounded-lg shadow-xl px-6 py-6 my-6 border border-gray-300'>
        <form className='w-1/2  max-[650px]:w-full space-y-4' onSubmit={formik.handleSubmit}>
        <div className="relative">
  {/* Label */}
  <label
    htmlFor="username"
    className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
  >
    <FaUser />
   
  </label>

  {/* Input */}
  <input
    type="text"
    id="username"
    name="username"
    placeholder="اسم المستخدم "
    className="w-full pr-12 border rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}  
    value={formik.values.username}
  />
</div>

{formik.touched.username && formik.errors.username && (
  <div className="text-red-500">{formik.errors.username}</div>
)}


<div className="relative">
  {/* Label */}
  <label
    htmlFor="email"
    className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
  >
   <MdOutlineEmail />
  </label>

  {/* Input */}
  <input
    type="email"
    id="email"
    name="email"
    placeholder="البريد الالكتروني"
    className="w-full pr-12 border rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}
  />
</div>
{formik.touched.email && formik.errors.email && (
  <div className="text-red-500">{formik.errors.email}</div>
)}

<div className="relative">
  {/* Label */}
  <label
    htmlFor="phone"
    className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
  >
   <FaPhoneAlt />


 
  </label>

  {/* Input */}
  <input
    type="phone"
    id="phone"
    name="phone"
    placeholder="رقم الجوال "
    className="w-full pr-12 border rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
   onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.phone}
  />
 
</div>
{formik.touched.phone && formik.errors.phone && (
  <div className="text-red-500">{formik.errors.phone}</div>
)}

 <div className="relative">
    {/* Label */}
    <label
      htmlFor="password"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
     <CiLock />
  
  
  
   
    </label>
  
    {/* Input */}
    <input
      type={password}
      id="password"
      name="password"
      placeholder=" كلمة المرور "
      className="w-full pr-12 border rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
     onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
    />
    <div className='absolute top-1/2 left-6 transform -translate-y-1/2' >
   {password === "password" ?  <FaEye  onClick={handelPassType}/>: <FaEyeSlash onClick={handelPassType}/> }

    </div>
   
  </div>
  {formik.touched.password && formik.errors.password && (
  <div className="text-red-500">{formik.errors.password}</div>
)}
  
  <div className="relative">
    {/* Label */}
    <label
      htmlFor="re_password"
      className="absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 flex items-center justify-center gap-2 pointer-events-none transition-all duration-200"
    >
     <CiLock />
  
  
  
     
    </label>
  
    {/* Input */}
    <input
      type={confirmPassword}
      id="password_confirmation"
      name="password_confirmation"
      placeholder=" تاكيد كلمة المرور "
      className="w-full border pr-12 rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password_confirmation}
    />
     <div className='absolute top-1/2 left-6 transform -translate-y-1/2' >
   {confirmPassword === "password" ?  <FaEye  onClick={ handelConfirmPassType}/>: <FaEyeSlash onClick={ handelConfirmPassType}/> }
    </div>
    
  </div>
  {formik.touched.password_confirmation && formik.errors.password_confirmation && (
  <div className="text-red-500">{formik.errors.password_confirmation}</div>
)}



<div>
    <textarea placeholder="اضف بيانات اخري" name='data' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.data}  className='w-full border rounded-xl px-6 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary '  />

</div>
{formik.touched.data && formik.errors.data && (
  <div className="text-red-500">{formik.errors.data}</div>
)}

<button type="submit"  className='w-full bg-primary text-white font-bold py-2 px-6 rounded-full ' >اضافة</button>

        </form>
        </div>
    </div>
  )
}
