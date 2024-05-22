"use client"

import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { Button } from '@/components/ui/button';
import { Search, Trash } from 'lucide-react';
import DeleteBtn from './Action/DeletBtn';


const pagination = true;
const paginationPageSize = 10;
const paginationPageSizeSelector = [10, 20, 50, 100];


export const StudentList = ({ students })=> {
    const [searchInput,setSearchInput] = useState()
   console.log("students information",students);
   
    const CustomButtons = (props) => {
        

        try {
            return (
         <div>
                <DeleteBtn endpoint={`/students?id=${props?.data?.id}`} />    
         </div>
        )
        } catch (error) {
            console.log(error)
            return NextResponse.json(
                {
                    message:"customDeleteBtn failed",
                    error,
                },
                {
                    status:500
                }
            )
        }
      }
  
    const [colDefs, setColDefs] = useState([
        { field: "id" , filter:true},
        { field: "name", filter:true },
        { field: "address", filter:true },
        { field: "contact", filter:true },
        { field: "Action", cellRenderer:CustomButtons },
    ]);

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        students && setRowData(students)
    }, [students])


    return (
        <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <div className='flex max-w-sm rounded-lg border p-2 shadow-sm gap-3 mx-2 my-3 items-center'>
                <Search/>
                <input 
                placeholder='Search Anything' 
                className='w-full outline-none text-center'
                onChange={(e)=>setSearchInput(e.target.value)}
                />
            </div>
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                quickFilterText={searchInput}
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                paginationPageSizeSelector={paginationPageSizeSelector}
            />
        </div>
    )
}
