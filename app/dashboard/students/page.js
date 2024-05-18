import React from 'react'
import Addstudent from './_components/addStudent'


function Students (){
  return (
  <div className='ml-64'>
      <h2 className='text-2xl p-4 font-semibold flex items-center justify-between'>
    Student
    <Addstudent/>
    </h2>
  </div>
  )
}

export default Students