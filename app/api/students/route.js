import db from "@/lib/db"
import {  NextResponse } from "next/server";

export async function POST(request){
    try {
        const { name, address, contact} = await request.json();

    

        // const newBanner = {title,imageUrl,link,isActive}
        const newBanner = await db.students.create({
            data:{
                name,
                address,
                contact,
                
            },
        })
       
        return NextResponse.json(newBanner)
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: "Failed to create banner",
                error,
            },{status:500}
        )
    }
}

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