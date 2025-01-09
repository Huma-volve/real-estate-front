import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import ChoosePreviewer from './ChoosePreviewer'
import ChooseArtist from './ChooseArtist'
import ChooseAuditor from './ChooseAuditor'

export default function ChooseTeam() {
  const [showPRiviewers,setshowPRiviewers] = useState(false)
  const [showArtist,setshowArtist] = useState(false)
  const [showAuditor,setshowAuditor] = useState(false)

  const handelshowPRiviewers= ()=>{
    setshowPRiviewers(!showPRiviewers)
  }
  
  const handelshowArtist= ()=>{
    setshowArtist(!showArtist)
  }
  const handelshowAuditor= ()=>{
    setshowAuditor(!showAuditor)
  }
  
  return (
    <div className='mt-4'>
        {/* اختيار معاين */}
   <div className='bg-[#D1E8E24D] border-b-2 border-b-[#8B94C6] p-4'>
    <div className='flex justify-between'>
       <div className='flex items-center'>
       <button className='bg-primary text-white text-xl py-2 px-4 rounded' onClick={handelshowPRiviewers}>اختار معاين</button>
       </div>
       <div>
        <img src='/image 26.png ' alt="" className='h-24 w-24'/>
        </div>

    </div>

   </div>

   {showPRiviewers && (<ChoosePreviewer/>)}

   {/* اختيار رسام */}
   <div className='bg-[#D1E8E24D] border-b-2 border-b-[#8B94C6] p-4'>
    <div className='flex justify-between'>
       <div className='flex items-center'>
       <button className='bg-primary text-white text-xl py-2 px-4 rounded' onClick={handelshowArtist}>اختار رسام</button>
       </div>
       <div>
        <img src='/image 26.png ' alt="" className='h-24 w-24'/>
        </div>

    </div>

   </div>

   {showArtist && (<ChooseArtist/>) }

   {/* اختيار مدقق */}
   <div className='bg-[#D1E8E24D] border-b-2 border-b-[#8B94C6] p-4'>
    <div className='flex justify-between'>
       <div className='flex items-center'>
       <button className='bg-primary text-white text-xl py-2 px-4 rounded' onClick={handelshowAuditor}>اختار مدقق</button>
       </div>
       <div>
        <img src='/image 26.png ' alt="" className='h-24 w-24'/>
        </div>

    </div>

   </div>

   {showAuditor && (<ChooseAuditor/>) }
    </div>
  )
}
