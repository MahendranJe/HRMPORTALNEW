import React, { useState } from 'react';
import '../Styles.css'
import Sidenavpannel from "./Sidenavpannel"
import HrmHeader from './HrmHeader';
import EmployeeCard from './EmployeeCard';
import AddEmployee from './AddEmployee';
import { MdPersonOutline, MdOutlineBusiness } from 'react-icons/md';



function Employee() {
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
    const [activeEmployeeContainer, setActiveEmployeeContainer] = useState(null);
    const [activeAddEmployee, setActiveAddEmployee] = useState(null)

    const handleSortChange = (field) => {
        setSortField(field);
        setEmployees([...employees].sort((a, b) => new Date(a[field]) - new Date(b[field])));
    };
    const showEmployeeContainer = () => {
        setActiveEmployeeContainer('employee');
        setActiveAddEmployee(null)
    }
    const showAddEmployee =()=>{
        setActiveAddEmployee('addEmployee')
        setActiveEmployeeContainer()

    }

    return (
        <div className="displayflex">
            <aside>
                <Sidenavpannel />
            </aside>
            <div className="hrmContainer">
                <HrmHeader />
                {activeAddEmployee === 'addEmployee' && (
                    <div><AddEmployee/></div>
                )}
                

                {activeEmployeeContainer === null && (
                    <div>                     
                        <div className='employee-icon-container'>                       
                            <EmployeeCard icons={<MdPersonOutline />} subtext='Employee' onClick={showEmployeeContainer} />
                            <EmployeeCard icons={<MdOutlineBusiness />} subtext='org config' />
                        </div></div>)}
                {activeEmployeeContainer === 'employee' && (
                    <div>
                        <div  className='employee-button'><h2>Employee</h2>
                            <div >                               
                                <button className='employeeSecondaryButton'> + Import Excel</button>
                                <button className='employeePrimaryButton' onClick={showAddEmployee}> + Add Employee</button>
                            </div></div>
                        <div className="employee-table-container">
                            <div className='displayflex-employee'>
                                <h2>Employee </h2>
                                <div className="search-container ">
                                    <input type="text" placeholder="Search Employee" />
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
                    </div>)}
            </div>

        </div>

    );
}

export default Employee;