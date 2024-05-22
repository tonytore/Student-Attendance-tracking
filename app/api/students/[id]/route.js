
// import db from "@/lib/db";
// import {  NextResponse } from "next/server";


// export async function GET(request,{params}){
//     const {id} = params
//     try {
//         const students= await db.students.findUnique({
//             where:{
//                 id,
//             },
          
//         });
   
//         return NextResponse.json(students)
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json(
//             {
//                 message:"student failed to get ",
//                 error,
//             },
//             {
//                 status:500
//             }
//         )
//     }
//     }

//     export async function DELETE(request, { params: { id } }) {
//         try {
//           const students = await db.students.findUnique({
//             where: {
//               id,
//             },
//           });
//           if (!students) {
//             return NextResponse.json(
//               {
//                 data: null,
//                 message: "failed to delete students",
//               },
//               { status: 404 }
//             );
//           }
      
//           const deletedStudents = await db.students.delete({
//             where: {
//               id,
//             },
//           });
        
//           return NextResponse.json(
//             { message: "successfully deleted banner" },
//             deletedStudents
//           );
//         } catch (error) {
//           console.log(error);
//           return NextResponse.json(
//             {
//               message: "failed to delete students",
//               error,
//             },
//             {
//               status: 500,
//             }
//           );
//         }
//       }


        