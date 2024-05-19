import db from "@/lib/db"
import {  NextResponse } from "next/server";

export async function GET(request){
    try {
        const students = await db.students.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(students)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"student failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }