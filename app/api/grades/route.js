import db from "@/lib/db"
import {  NextResponse } from "next/server";
export async function GET(request){
    try {
        const grade = await db.grades.findMany({
            orderBy:{
                createdAt : "desc"
            }
        })
       
        return NextResponse.json(grade)
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message:"banner failed",
                error,
            },
            {
                status:500
            }
        )
    }
    }