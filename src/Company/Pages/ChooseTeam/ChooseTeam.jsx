import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import ChoosePreviewer from './ChoosePreviewer'
import ChooseArtist from './ChooseArtist'
import ChooseAuditor from './ChooseAuditor'
import { resolveValue } from 'react-hot-toast'
import AssignedReviewer from '../../components/Assigned/AssignedReviewer'
import AssinedInspector from '../../components/Assigned/AssinedInspector'

export default function ChooseTeam() {
  const [showPRiviewers,setshowPRiviewers] = useState(false)
  const [showArtist,setshowArtist] = useState(false)
  const [showAuditor,setshowAuditor] = useState(false)
  const[reviewerassined,setRevewerassigned] = useState(true)
  const[Inspectorassined,setInspectorassigned] = useState(true)
  
  const[assigned1,setassigned1]=useState(false)
  const[assigned2,setassigned2]=useState(false)


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
  {reviewerassined && (
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
  )}

   {assigned1 && (<AssignedReviewer  setshowPRiviewers={setshowPRiviewers} />)}
{showPRiviewers && (<ChoosePreviewer setRevewerassigned={setRevewerassigned} setshowPRiviewers={setshowPRiviewers}  setassigned1={setassigned1}/>)}

   {/* اختيار رسام */}
   {Inspectorassined && (  <div className='bg-[#D1E8E24D] border-b-2 border-b-[#8B94C6] p-4'>
    <div className='flex justify-between'>
       <div className='flex items-center'>
       <button className='bg-primary text-white text-xl py-2 px-4 rounded' onClick={handelshowArtist}>اختار مدقق</button>
       </div>
       <div>
        <img src='/image 26.png ' alt="" className='h-24 w-24'/>
        </div>

    </div>

   </div>)}

   {showArtist && (<ChooseArtist   setInspectorassigned={setInspectorassigned} setshowArtist={setshowArtist}  setassigned2={setassigned2} />) }

   {assigned2 && (<AssinedInspector  setshowArtist={setshowArtist} />)}
  
    </div>
  )
}
