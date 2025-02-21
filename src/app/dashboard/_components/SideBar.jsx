'use client'
import React from 'react'
import { IoHomeOutline, IoShieldOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Progress } from "../../../components/components/ui/progress";
import { usePathname } from 'next/navigation';
import Link from 'next/link';




const SideBar = () => {
  const Menu=[
    {
      id:1,
      name:"Home",
      icon:<IoHomeOutline />,
      path:"/dashboard"
    },
    {
      id:2,
      name:"Explore",
      icon:<GrProjects />,
      path:"/dashboard/explore"
    },
    {
      id:3,
      name:"Upgrade",
      icon: <IoShieldOutline />,
      path:"/dashboard/upgrade"
    },
    {
      id:4,
      name:"Logout",
      icon:<RiLogoutCircleRLine />,
      path:"/dashboard/logout"
    }
  ]
  const path = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
      SideBar logo
      <hr className='my-5'/>

      <ul>
  {Menu.map((item) => (
    <Link href={item.path} key={item.id}>
      <div
        className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2 ${
          item.path === path && "bg-gray-100 text-black"
        }`}
      >
        <div className="text-2xl">{item.icon}</div>
        <h2>{item.name}</h2>
      </div>
    </Link>
  ))}
</ul>

      <div className='absolute bottom-10 w-[80%]'>
      <Progress value={33} />
      
      <h2 className='text-sm my-2'> 3 out of 5 Course created</h2>
      <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course generate</h2>

      </div>
    </div>
  )
}

export default SideBar
