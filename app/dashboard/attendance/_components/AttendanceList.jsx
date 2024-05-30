"use client"

import React, { useState } from 'react'
import MonthSelection from '../../../_components/MonthSelection'
import SelectGrade from '../../../_components/SelectGrade'
import { Button } from '@/components/ui/button'

const AttendanceList = ({grades}) => {
    const [selectedMonth,setSelectedMonth]  = useState()
    const [selectedGrade,setSelectedGrade]  = useState()

    const onSearchHandler = ()=>{
       console.log(selectedMonth,selectedGrade);
    }
  return (
    <div className='ml-64'>
    <h2 className='text-2xl p-4 font-bold flex items-center justify-between'>
        Attendance
    </h2>
    <div className='flex gap-5 rounded-lg border shadow-sm items-center p-5 mx-auto'>
        <div className='flex items-center p-2 gap-2'>
            <p>Select Month:</p>
            <MonthSelection selectedMonth={(v)=>setSelectedMonth(v)} />
        </div>
        <div className='flex items-center p-2 gap-2'>
            <p>Select Grage:</p>
            <SelectGrade grades={grades} selectedGrade={(v)=>setSelectedGrade(v)} />
        </div>

        <Button onClick={()=>onSearchHandler()} className="bg-purple-600">Search</Button>
    </div>

</div>
  )
}

export default AttendanceList
