import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'
import * as yup from "yup"
import editepassword from '../../CompanyApi/Setting/EditePass'

export default function EditePassword() {
    const[passType,setPassType] =useState("password")
    const[repassType,setrePassType] =useState("password")
    const[confirmpassType,setconfirmPassType] =useState("password")

    const togglePassType = () => {
        setPassType(passType === "password"? "text" : "password")
    }

    const togglerePassType = () => {
        setrePassType(repassType === "password"? "text" : "password")
    }

    const toggleconfirmPassType = () => {
        setconfirmPassType(confirmpassType === "password"? "text" : "password")
    }

    const validationSchema = yup.object({
       
          current_password: yup
          .string()
          .required("كلمة المرور الحاليه مطلوبة")
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
            "كلمه المرور تتكون من 8 احرف وتتضمن حرف كبير وحرف صغير"
          ),
          password: yup
          .string()
          .required("كلمة المرور مطلوبة")
          .matches(
            /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
            "كلمه المرور تتكون من 8 احرف وتتضمن حرف كبير وحرف صغير"
          ),
          password_confirmation: yup
          .string()
          .required("تأكيد كلمة المرور مطلوب")
          .oneOf([yup.ref("password")],"كلمة المرور غير متطابقة")
      });
    
      const formik = useFormik({
        initialValues: {
        current_password: "",
        password: "",
        password_confirmation:""
        },
        validationSchema,
        onSubmit: async (values) => {
          let id;
          try {
            id = toast.loading("انتظر...");
            const log = await editepassword(values);
            toast.dismiss(id);
            toast.success("تم تغيير كلمه المرور بنجاح");
          } catch (error) {
            toast.dismiss(id);
            toast.error(error.message || "خطاء في تغيير كلمه المرور");
          } finally {
            
          }
        },
      });
    
  return (
    <div>
        <div className='container-main rounded-xl border border-gray-300 shadow-xl my-4 p-6'>
            <form className='w-1/2 m-auto space-y-2' onSubmit={formik.handleSubmit}>
<div className='space-y-4'>
    <label htmlFor='current_password' className='block text-gray-700 font-bold '>كلمه المرور الحاليه</label>
    <div className='relative'>
    <input type={passType} id='current_password' name='current_password' value={formik.values.current_password } onChange={formik.handleChange} onBlur={formik.handleBlur}  className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>
    {passType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglePassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglePassType} />}
    </div>
    {formik.touched.current_password && formik.errors.current_password? (<div className='text-red-500'>{formik.errors.current_password}</div>) : null}

</div>
<div className='space-y-4'>
    <label htmlFor='password' className='block text-gray-700 font-bold '>كلمه المرور الجديده</label>
    <div className='relative'>
    <input type={repassType} id='password' name='password' value={formik.values.password } onChange={formik.handleChange} onBlur={formik.handleBlur} className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>
    {repassType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglerePassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={togglerePassType} />}
    </div>
    {formik.touched.password && formik.errors.password? (<div className='text-red-500'>{formik.errors.password}</div>) : null}

</div>

<div className='space-y-4'>
    <label htmlFor='password_confirmation' className='block text-gray-700 font-bold '>تاكيد كلمه المرور</label>
    <div className='relative'>
    <input type={confirmpassType} id='password_confirmation' name='password_confirmation' value={formik.values.password_confirmation } onChange={formik.handleChange} onBlur={formik.handleBlur} className='inpute-main pr-10' />
    <div className='absolute top-1/2 right-4 text-2xl text-gray-300 transform -translate-y-1/2'>
    <MdOutlineLock />
    </div>
    {confirmpassType === 'password' ? <FaEye className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={toggleconfirmPassType} />:<FaEyeSlash className='absolute top-1/2 left-4 text-xl text-gray-400 transform -translate-y-1/2 cursor-pointer' onClick={toggleconfirmPassType} />}
    </div>
    {formik.touched.password_confirmation && formik.errors.password_confirmation? (<div className='text-red-500'>{formik.errors.password_confirmation}</div>) : null}

</div>
<button className='btn-main ' type='submit'>تعديل</button>
            </form>
        </div>
    </div>
  )
}
