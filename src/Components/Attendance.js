import React ,{useState} from "react";
import '../Styles.css'
import EmployeeCard from "./EmployeeCard";
import Sidenavpannel from "./Sidenavpannel"
import HrmHeader from "./HrmHeader";
import AttendanceList from "./AttendanceList";

import LeaveReqest from "./Leaverequest";
import { MdPersonOutline, MdEventAvailable } from 'react-icons/md';

function Attendance() {
 
    const[activeLeaveRequest , SetActiveLeaveRequstContainer] = useState(null);

    const showLeaveRequest = () =>
    {
        SetActiveLeaveRequstContainer('leaverequest')
    }


    return(
        <div >
        <div className="displayflex">
            <aside>
            <Sidenavpannel />
            </aside>              
            <div className="hrmContainer">
                <HrmHeader />
               
                    <h2 style={{paddingLeft:'20px'}}>Employee</h2>
                    {activeLeaveRequest === null && 
                    <div>
                    <div className='employee-icon-container'>
                        <EmployeeCard icons={<MdPersonOutline />} subtext='Leave Request'  onClick={showLeaveRequest}/>
                        <EmployeeCard icons={<MdEventAvailable />} subtext='Attendance' />                      
                    </div></div>}
                    {activeLeaveRequest === 'leaverequest' &&                    
                    <div><LeaveReqest/></div>}
                    </div>
                   
            
        </div>

    </div>

)
    
}
export default Attendance