
import { getData } from '@/lib/getData';
import React from 'react'
import GradeList from './GradeList';


const SelectGrade = async ({selectedGrade}) => {
  const grades = await getData('grades')
   

return (
<div>
<GradeList selectedGrade={selectedGrade} grades={grades}/>
</div>
 
)
}

export default SelectGrade
