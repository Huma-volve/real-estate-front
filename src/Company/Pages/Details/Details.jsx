import React from 'react'
import { IoIosArrowBack, IoMdCloudUpload } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Details() {
  return <>
  <section className='container-main space-y-4 py-6 bg-white'>
<div className='flex items-center space-x-2 text-xl max-[391px]:text-sm text-primary '>
  <p>المشاريع</p>
    <p><IoIosArrowBack className='text-2xl inline-block' />عقارات </p>
    <p><IoIosArrowBack className='text-2xl  inline-block' />تفاصيل</p>
   
</div>
<div className=' text-xl font-bold'>شقة للتمليك في شارع السند ، حي النرجس ، الرياض ، امارة منطقة الرياض</div>

<div className='grid grid-cols-12 rounded-xl gap-2 overflow-hidden'>
<div className='col-span-12 md:col-span-6'>
    <img src='/v987-09.jpg' alt='' className='w-full h-full'/>
</div>
<div className='md:col-span-3 col-span-6 '>
   <div className='mb-2 h-1/2 '>
   <img src='/v987-09.jpg' alt='' className='w-full  h-full'/>
   </div>
   <div className='h-1/2'>
   <img src='/v987-09.jpg' alt='' className='w-full h-full'/>
   </div>

</div>
<div className='md:col-span-3 col-span-6 '>
   <div className='mb-2 h-1/2 '>
   <img src='/v987-09.jpg' alt='' className='w-full  h-full'/>
   </div>
   <div className='h-1/2'>
   <img src='/v987-09.jpg' alt='' className='w-full h-full'/>
   </div>

</div>
</div>


{/*  */}
<div className='space-y-2  rounded-2xl my-4 border shadow-xl px-6 pt-6 pb-20  '>

  <p className='text-primary text-xl font-bold'>85,000 ريال سعودي</p>
  <p>شقة جديدة للتمليك بحي النرجس </p>
  <p>شارع السند شقق ألما </p>
  <p>تتكون من صالة ومجلس وثلاث غرف نوم ( منها وحده منها ماستر ) ومطبخ وثلاث دورات مياه وتراس  مطل على الشارع  بمساحة 138م مجهزة بأحدث التقنيات الذكية ومكيفة بالكامل مع مطبخ مجهز من فرن كهربائي  وشواية ومكرويف وغسالة صحون  في الدور الأول في عمارة سكنية فاخرة بواجهات عصرية وممرات رخامية ومواقف واسعة بمنطقة حيوية بالقرب من أهم المعالم الأساسية بمدينة الرياض
</p>

<p>المميزات:</p>
<p>تكييف كامل بأربع وحدات ذكية على نظام wife وسخانات مياه
مطبخ جاهز مصمم بشكل عصري مجهز بكاونتر خدمة ومكان لغسيل الملابس
قفل ذكي ونظام سمارت متكامل 
مهيئة بجميع وسائل السلامة ومزودة بنظام أمني عالي
اضاءة LED تعمل باللمس
تتمتع بالإضاءة الطبيعة من خلال النوافذ الواسعة
مؤسسة بأحدث مواد البناء وتقنيات العزل المائي والحراري والأجباس المقاومة للحرائق والرطوبة 
موقف خاص واسع بجوار المدخل الرئيسي
اطلالة جنوبية على شارع هادئ بجوار منطقة سكنية مكتملة الخدمات
تقع بالقرب من حديقة الحي وبجوار المسجد على بعد مئة متر مشيا على الاقدام
تبعد الشقة مسافة 5 دقائق عن جامعة الامام محمد بن سعود الاسلامية وجامعة الأميرة نورة ومسافة 12 دقيقة عن مطار الملك خالد
سداد فاتورة الكهرباء والمياه لمدة سنة من تاريخ الملكية 
صيانة مجانية للمساحات المشتركة لمدة سنة من تاريخ الملكية</p>

<p className='text-primary font-bold'>ألنوع</p>
<p>شقة</p>

<p className='text-primary font-bold'>المساحه</p>
<p>138</p>

<p className='text-primary font-bold'>المدينه </p>
<p>الرياض</p>

<p className='text-primary font-bold'>المنطقه</p>
<p> النرجس</p>


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
<Link to={"#"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>اختيار فريق</Link>
</div>

<div className='md:w-1/2'>
  <Link to={"#"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>التعليقات </Link></div>
</div>

<div className='md:flex space-y-4 md:space-y-0 gap-6 justify-between mt-4'>
<div className='md:w-1/2'>
<Link to={"#"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>تقارير الفريق</Link>
</div>

<div className='md:w-1/2'>
<Link to={"#"} className='py-2 px-6 text-center rounded inline-block w-full  bg-[#D1E8E2]'>كتابه التقييم</Link>
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

  </section>
  </>
}