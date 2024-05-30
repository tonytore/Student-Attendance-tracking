
import { getData } from '@/lib/getData'
import AttendanceList from './_components/AttendanceList'


async function Attendance() {
    const grades = await getData('grades')
   
    return (
        <div className='ml-64'>
           <AttendanceList grades={grades}/>

        </div>
    )
}

export default Attendance
