"use client"

import React from 'react'
import logo from '../../../public/logo1.svg'
import Image from 'next/image'
import { BatteryMedium, GraduationCap, LayoutDashboard, Settings } from 'lucide-react'
import {useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Link from 'next/link'

export const SideNav = () => {
    const {user} = useKindeBrowserClient()
    
    const menuList = [
        {
            id:1,
            name:"Dashboard",
            icon:<LayoutDashboard />,
            path:'/dashboard'
        },
        {
            id:1,
            name:"Student",
            icon:<GraduationCap />,
            path:'/student'
        },
        {
            id:1,
            name:"Attendance",
            icon:<BatteryMedium />,
            path:'/attendance'
        },
        {
            id:1,
            name:"Setting",
            icon:<Settings />,
            path:'/setting'
        }
    ]
  return (
    <div className='h-screen flex flex-col justify-between items-center shadow-md'>
       <Image
       src={logo}
       width={180}
       height={50}
       alt='logo'
       className='mx-auto my-3  p-7 shadow-md'
       />
       <div className='mx-12 flex-1  my-36'>
         {
            menuList.map((menu,i)=>(
             <Link
             key={i}
             href={menu.path}
             className='flex p-5 gap-2 hover:bg-purple-400 hover:rounded-lg'
             >
                {menu.icon} {menu.name}
             </Link>
            ))
         }
       </div>

       <div className='flex justify-start items-center'>
        <Image
        src={user?.picture}
        width={35}
        height={35}
        alt='user'
        className='rounded-full mx-4'
        />
       <div className='text-sm'>
       <h2>{user?.given_name} {user?.family_name}</h2>
        <h2>{user?.email}</h2>
       </div>
       </div>
    </div>
  )
}
