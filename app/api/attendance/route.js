import db from "@/lib/db"
import {  NextResponse } from "next/server";
export async function GET(request){
    try {
        const attendance = await db.attendance.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(attendance)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"attendance failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }