import React, { useEffect, useState } from 'react'
import getwallet from '../../CompanyApi/wallet/wallet';

export default function Mybalance() {
  const [wallet,setwallet] = useState(null)
     
  useEffect(()=>{
    try{
      const getallwallet = async()=>{
        const response = await getwallet();
        setwallet(response)

      }
      getallwallet();

    }catch(errors){
      console.log(errors)}
  },[])
  return <>
  <section className='container-main py-8'>
{wallet&&(
  <div className='flex flex-col items-center space-y-4 border border-gray-300 rounded-lg px-4 py-10 shadow-xl'>
  <div>
      <img src='/Asset 7 1.png' alt=' ' className='w-full h-full'/>
  </div>
  <div className='px-10 py-8 bg-[#D1E8E24D] border shadow-xl rounded w-[60%] max-[470px]:w-[80%] text-center m-auto'>
      <p className='text-xl font-bold'>رصيد حسابي</p>
      <p className='text-primary font-bold text-xl'>{wallet.current_balance}</p>
  </div>
  
  <div className='px-10 py-8 bg-[#D1E8E24D] border shadow-xl rounded w-[60%] max-[470px]:w-[80%] text-center m-auto'>
      <p className='text-xl font-bold'>رصيد مستحق</p>
      <p className='text-primary font-bold text-xl'>{wallet.outstanding_balance}</p>
  </div>
  </div>
)}

  </section>
  </>
}
