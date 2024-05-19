import React from 'react'
import Addstudent from './_components/addStudent'
import { getData } from '@/lib/getData'


async function Students (){
  const grades = await getData('grades')
  
  return (
  <div className='ml-64'>
      <h2 className='text-2xl p-4 font-semibold flex items-center justify-between'>
    Student
    <Addstudent grades={grades}/>
    </h2>
  </div>
  )
}

export default Students