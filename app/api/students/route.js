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
                createdAt : "asc"
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

    export async function DELETE(request) {
        try {
            const searchParams = request.nextUrl.searchParams
            const id = searchParams.get('id')
          const students = await db.students.findUnique({
            where: {
              id,
            },
          });
          if (!students) {
            return NextResponse.json(
              {
                data: null,
                message: "failed to delete students",
              },
              { status: 404 }
            );
          }
      
          const deletedStudents = await db.students.delete({
            where: {
              id,
            },
          });
        
          return NextResponse.json(
            { message: "successfully deleted banner" },
            deletedStudents
          );
        } catch (error) {
          console.log(error);
          return NextResponse.json(
            {
              message: "failed to delete students",
              error,
            },
            {
              status: 500,
            }
          );
        }
      }    