import React from 'react'
import { getData } from '@/lib/getData'


const SelectGrade = async () => {
  const grades = await getData('grades')
  console.log(grades);
  return (
    <div className='p-3 border rounded-md'>
        
      <select>
        {
          grades.grade.map((item, i) => {

            <option className='' key={i} value={item.grade}>{item.grade}</option>

          })
          }
      </select>

    </div>
  )
}

export default SelectGrade
