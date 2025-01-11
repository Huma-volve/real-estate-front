import React from 'react'
import { FaProjectDiagram } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Projects() {
    const navDetails =[
        {id:1,name:"المشاريع",link:"/company/projects",icon:<IoIosArrowBack />},
        {id:2,name:"عقارات",link:"/company/projects" ,icon:<IoIosArrowBack />},
        {id:4,name:"اختيا فريق",link:"/company/projects/chooseTeam",icon:<IoIosArrowBack />},
        {id:5,name:"تقارير الفريق",link:"/company/projects/TeamReport",icon:<IoIosArrowBack />},
        {id:6,name:"تقرير المعاين",link:"/company/projects/previwerReport",icon:<IoIosArrowBack />},
        {id:7,name:"تقرير الشركه",link:"/company/projects/companyReport"}
    ]
  return <>
  <div>
<nav className='flex max-[900px]:flex-wrap items-center gap-2'>
 {navDetails && navDetails.map((item)=>
<ul className=' '  key={item.id}>
<li className=' flex items-center justify-center text-lg'><NavLink to={item.link} className={({isActive})=>isActive ? "text-primary flex items-center justify-center" : "text-black flex items-center justify-center"}>{item.name}<span className='inline-block text-xl'> {item.icon}</span></NavLink> </li>
</ul>
)}
</nav>

<Outlet/>

  </div>
  </>
}
