import { Pencil } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

const EditBtn = ({endpoint,title }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Link href={`${baseUrl}/${endpoint}`} className=' font-medium text-green-600 dark:text-green-500 flex gap-2 items-center space-x-1' >
        <Pencil className='w-4 h-4'/>
        <span> Edit {title} </span>
    </Link>
  )
}

export default EditBtn
