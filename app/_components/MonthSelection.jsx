"use client"

import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { addMonths } from 'date-fns'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import { CalendarDays } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"

const monthSelection = ({selectedMonth}) => {
    const nextMonth = addMonths(new Date, 0)
    const [month, setMonth] = useState(nextMonth)
   

    return (
        <div className=''>
            <Popover>
                <PopoverTrigger asChild>
                    <div className='flex gap-2 items-center'>
                        <CalendarDays />
                        <Button>{moment(month).format('MMM yyyy')}</Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar
                        mode="single"
                        month={month}
                        onMonthChange={(value)=>{ setMonth(value);selectedMonth(value)}}
                        className="flex flex-1 justify-center"
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default monthSelection
