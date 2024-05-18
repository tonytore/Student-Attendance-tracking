"use client"

import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import ThemeSwitcherBtn from './ThemeSwitcherBtn'

export const Header = () => {
    const {user} = useKindeBrowserClient()
  return (
    <div className='flex p-7 shadow-md justify-between'>
    <div>
       <ThemeSwitcherBtn/>
    </div>
    <div className=''>
         <Image
        src={user?.picture}
        width={35}
        height={35}
        alt='user'
        className='rounded-full  shadow-md'
        />
    </div>
    </div>
  )
}
