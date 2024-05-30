
import React from 'react'
import GradeList from './GradeList';


const SelectGrade = ({selectedGrade,grades}) => {
  
   

return (
<div>
<GradeList selectedGrade={selectedGrade} grades={grades}/>
</div>
 
)
}

export default SelectGrade
