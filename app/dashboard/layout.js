import React from 'react'
import { SideNav } from './_components/sideNav'
import { Header } from './_components/header'

function layout({children}){
  return(
    <>
    <div className='md:w-64 fixed hidden md:block'>
      <SideNav/>
    </div>
    <div>
      <div className='ml-64 w-full'>
        <Header/>
      </div>
      {children}
      
      </div>
    </>
  )
}
export default layout