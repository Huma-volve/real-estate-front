import React, { useEffect, useState } from 'react'
import getTerms from '../../CompanyApi/terms/terma';

export default function TermsAndCondattions() {
  const [terms,setterms] = useState(null)

  useEffect(() => {
    // Fetch data from API
    const fetchterms = async () => {
      try {
        const response = await getTerms();
        setterms(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchterms();
  }, []);
  return <>
  <section className='container-main '> 
   {terms && (<div className='flex flex-col items-center space-y-4'>
   <h2 className='text-2xl font-bold text-primary pb-4'>شروط واحكام</h2>
    <div>
  <p className='text-xl'> {terms[0].description}</p>
    </div>

    <div className='w-full space-y-4'>
        <h2 className='text-xl w-fit before:content-[""] font-bold min-w-[130px] before:w-full before:h-1 before:bg-gradient-to-r from-primary to-[#000000] relative  before:absolute before:-bottom-2 '>جمع المعلومات</h2>
        <div className='text-xl'>
        <p>تشمل التي قد نجمعها عنك ("المعلومات الشخصية")، على سبيل المثال لا الحصر، ما يلي:</p>
        <ul className=' ' >
        {JSON.parse(terms[0].information).map((item, index) => (
  <div key={index} className="flex items-center">
    <div className="w-3 h-3 bg-primary rounded-full ml-2"></div>
    <p className="">{item}</p>
  </div>
))}

         
        </ul>
        </div>
        </div>

        <div className='w-full space-y-4 text-xl'>
        <h2 className='text-xl w-fit before:content-[""] font-bold min-w-[130px] before:w-full before:h-1 before:bg-gradient-to-r from-primary to-[#000000] relative  before:absolute before:-bottom-2 '>الامان</h2>
          <p>{terms[0].security}</p>
        </div>
    
   </div>)}
  </section>
  </>
}
