import React from 'react'
import MonthSelection from '../../_components/MonthSelection'
import SelectGrade from '@/app/_components/SelectGrade'
import { Button } from '@/components/ui/button'
import { Label } from '@radix-ui/react-context-menu'
const Attendance = () => {
    return (
        <div className='ml-64'>
            <h2 className='text-2xl p-4 font-bold flex items-center justify-between'>
                Attendance
            </h2>
            <div className='flex gap-3 rounded-lg border shadow-sm items-center p-5 mx-auto'>
                <div className='flex gap-2'>
                    <Label>Select Month:</Label>
                    <MonthSelection />
                </div>
                <div className='flex gap-2'>
                    <Label>Select Grage:</Label>
                    <SelectGrade />
                </div>

                <Button variant="destructive">Search</Button>
            </div>

        </div>
    )
}

export default Attendance
