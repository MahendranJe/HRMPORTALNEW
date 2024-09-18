import React from 'react';
import '../Styles.css'
import Sidenavpannel from './Sidenavpannel';
import HrmHeader from './HrmHeader';
import MyCalendar from './Calender';
import Announcements from './Anouncement';
import Card from './Card';
import Graph from './Graph';
import Birthdays from './Birthday';

function Dashboard() {
    return (
        <div className="displayflex">
            <aside>
                <Sidenavpannel />
            </aside>
            <div className="hrmContainer">
                <HrmHeader />
                <div className='main-content'>
                    <div >
                        <h2 style={{marginLeft:"1rem"}}>Dashboard</h2>
                        <div className="card-container displayflex">
                            <Card title="Leave Request" number="04" />
                            <Card title="Attendance" number="10" />
                            <Card title="Total Employees" number="24" />
                        </div>
                        <div className="graph-container">
                            <Graph title="PayRoll" number="48" />
                            <Graph title="Task Request" number="16" />
                        </div>
                    </div>

                    <div className='calender-margin'>
                        <h2>Calender</h2>
                        <MyCalendar /></div>
                       
                </div>
                <div className='main-content'>
                    <div className='anouncement-container'>
                        <Announcements /></div>
                    <div><Birthdays /></div>
                </div>
               

            </div>
        </div>



    );
}

export default Dashboard;