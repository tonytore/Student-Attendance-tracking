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
import { makePostRequest } from '@/lib/apiRequest'
import SubmitButton from './submitButton'
import { useRouter } from 'next/navigation'
import { LoaderIcon } from 'react-hot-toast'


export default function Addstudent({grades}) {
  
  const router = useRouter()
  const [open,setOpen] = useState(false)
  const [isLoading , setLoading] = useState(false)

  function redirect(){
    router.push('/dashboard/students')
    
  }

  const {
    register,
    reset,
    handleSubmit,
    formState:{errors}} = useForm()

    async function onSubmit(data){
        
        makePostRequest(
          setLoading,
          "api/students", // endpoint
          data,
          "Student",    // resourceName
          redirect
          )
        reset()
        console.log(data);
 }
  return (
   <div>
     <Button className="bg-purple-600" onClick={()=>setOpen(true)}>Add Students</Button>
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
             {...register(`name`, { required: true })}
              placeholder="Ex. Jhon Carry"
              className="col-span-3"
            />
          </div>
                  
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">
              Contact Number
            </Label>
            <Input
            type="tel"
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
          <Button className="mt-4" variant="shadow" onClick={()=>{return setOpen(false) }}>cancel</Button>
          <SubmitButton isLoading={isLoading} buttonTitle='Save' 
          loadingButtonTitle={<LoaderIcon className='animate-spin'/>}/>
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
