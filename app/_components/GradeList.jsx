
import React from 'react'

export default function GradeList({selectedGrade,grades}) {
  
  return (
    <select onChange={(e)=>selectedGrade(e.target.value)} className='p-2'>
    {
      grades.map((item, i) => {
       return <option  key={i} value={item.grade}>{item.grade}</option>
  
      })
      }
  </select>
  )
}
