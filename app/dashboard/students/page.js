import React from 'react'
import Addstudent from './_components/addStudent'
import { getData } from '@/lib/getData'
import { StudentList } from './_components/StudentList'


async function Students (){
  const grades = await getData('grades')
  const students = await getData('students')

  return (
  <div className='ml-64'>
      <h2 className='text-2xl p-4 font-semibold flex items-center justify-between'>
    Student
    <Addstudent grades={grades}/>
    </h2>
   
        <StudentList students={students}/>
    
    
  </div>
  )
}

export default Students