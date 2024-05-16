"use client"

import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function Dashboard(){
    const { setTheme } = useTheme()
    useEffect(()=>{
      setTheme('light')
    },[])
    return(
        <div>Page</div>
    )
}


export default Dashboard