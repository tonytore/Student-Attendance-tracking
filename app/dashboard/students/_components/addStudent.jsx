"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {useForm} from 'react-hook-form'


export default function Addstudent({grades}) {
  console.log('grades',grades);
  const [open,setOpen] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState:{errors}} = useForm()

     function onSubmit(data){
        console.log(data);
        reset()
 }
  return (
   <div>
     <Button onClick={()=>setOpen(true)}>Add Students</Button>
     <Dialog open={open}>
     
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle> Add new Student</DialogTitle>
         <DialogDescription>
         <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
              Full Name
            </Label>
            <Input
             {...register(`fullname`, { required: true })}
              placeholder="Ex. Jhon Carry"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Select Grade
            </Label>
            <select className='p-2 border rounded-lg'
            {...register(`grade`)}>t
            {
            grades.map((item,i)=>(
                <option key={i} value="6th">{item.grade}</option>
              )
            )}
          
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Contact Number
            </Label>
            <Input
            type="number"
            {...register(`contact`)}
              placeholder="Ex. 84302843256 "
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label  className="text-right">
              Address
            </Label>
            <Input
               {...register(`address`)}
              placeholder="Ex. 435 N tryon Street, NC "
              className="col-span-3"
            />
          </div>

          <div className='flex gap-2 items-center justify-end'>
          <Button variant="shadow" onClick={()=>setOpen(false)}>cancel</Button>
          <Button type="submit">Save</Button>
          </div>
        </div>
       
        </form>
         </DialogDescription>
        </DialogHeader>
       
      </DialogContent>
    </Dialog>
   </div>
  )
}
