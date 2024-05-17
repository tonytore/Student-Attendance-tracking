"use client"

import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'

export const Header = () => {
    const {user} = useKindeBrowserClient()
  return (
    <div className='p-7 shadow-md'>
         <Image
        src={user?.picture}
        width={35}
        height={35}
        alt='user'
        className='rounded-full  shadow-md'
        />
    </div>
  )
}
