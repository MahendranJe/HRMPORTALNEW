import React , {useState} from "react";
import AttendanceCard from "./AttendanceCard";

function LeaveReqest() {
    const [employees, setEmployees] = useState([
        { id: '1ID001', name: 'MAGHESH', email: 'magesh@dotcod.in', joinDate: '1/1/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID002', name: 'Tesla', email: 'tesla@dotcod.in', joinDate: '1/2/23', designation: 'Software Engineer', status: 'Probation' },
        { id: '1ID003', name: 'GM', email: 'gm@dotcod.in', joinDate: '4/19/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID001', name: 'MAGHESH', email: 'magesh@dotcod.in', joinDate: '1/1/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID002', name: 'Tesla', email: 'tesla@dotcod.in', joinDate: '1/2/23', designation: 'Software Engineer', status: 'Probation' },
        { id: '1ID003', name: 'GM', email: 'gm@dotcod.in', joinDate: '4/19/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID001', name: 'MAGHESH', email: 'magesh@dotcod.in', joinDate: '1/1/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID002', name: 'Tesla', email: 'tesla@dotcod.in', joinDate: '1/2/23', designation: 'Software Engineer', status: 'Probation' },
        { id: '1ID003', name: 'GM', email: 'gm@dotcod.in', joinDate: '4/19/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID001', name: 'MAGHESH', email: 'magesh@dotcod.in', joinDate: '1/1/23', designation: 'Software Engineer', status: 'Confirmed' },
        { id: '1ID002', name: 'Tesla', email: 'tesla@dotcod.in', joinDate: '1/2/23', designation: 'Software Engineer', status: 'Probation' },
        { id: '1ID003', name: 'GM', email: 'gm@dotcod.in', joinDate: '4/19/23', designation: 'Software Engineer', status: 'Confirmed' },

    ]);

        const [sortField, setSortField] = useState('joinDate');
        const handleSortChange = (field) => {
            setSortField(field);
            setEmployees([...employees].sort((a, b) => new Date(a[field]) - new Date(b[field])));
        };
    return(
        <div>
            <div className="attendanceCardContainer">
                <AttendanceCard subtext='Employee' number="08"/>
                <AttendanceCard subtext='Employee' number="10"/>
                <AttendanceCard subtext='Employee' number="13"/>
                <AttendanceCard subtext='Employee' number="02"/>
            </div>
                 <div>
                       
                        <div className="employee-table-container">
                            <div className='displayflex-employee'>
                                <h2>Leave Request 01 </h2>
                                <div className="search-container ">
                                    <input type="text" placeholder="Type Here..." />
                                </div>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th><div className="dropdown">
                                            <select onChange={(e) => handleSortChange(e.target.value)}>
                                                <option value="joinDate">Joined Date</option>
                                                <option value="createdDate">Created Date</option>
                                                <option value="relievedDate">Relieved Date</option>
                                                <option value="salaryHikeDate">Salary Hike Date</option>
                                            </select>
                                        </div></th>
                                        <th>Designation</th>
                                        <th>Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>
                                                <div className="employee-info">
                                                    <span className="employee-name">{employee.name}</span>
                                                    <span className="employee-email">{employee.email}</span>
                                                </div>
                                            </td>
                                            <td>{employee.joinDate}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.status}</td>
                                            <td>...</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
    )
    
}
export default LeaveReqest