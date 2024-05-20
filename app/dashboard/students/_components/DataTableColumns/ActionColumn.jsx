import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


import { MoreHorizontal } from 'lucide-react'
import DeleteBtn from '../Action/DeletBtn'
import { Button } from '@/components/ui/button'


export default function ActionColumn({endpoint}) {
   
 
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className="h-8 w-8 p-0">
            {/* <span className="sr-onl">Open menu</span> */}
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-950" align="end">
          {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
          <DropdownMenuItem className='hover:bg-slate-600'><DeleteBtn  endpoint={endpoint} /></DropdownMenuItem>
          {/* <DropdownMenuItem className='hover:bg-slate-600'><EditBtn  endpoint={editEndpoint} title={title}/></DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  
}
