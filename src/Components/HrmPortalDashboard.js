import React from "react";
import HrmHeader from "./HrmHeader";
import Card from "./Card";
import MyCalendar from "./Calender";
import Sidenavpannel from "./Sidenavpannel"
import Graph from "./Graph";
import Announcements from "./Anouncement";

function HrmPortalDashboard() {
    return (
        <div >
            <div className="displayflex">
                <aside>
                <Sidenavpannel />
                </aside>              
                <div className="hrmContainer">
                    <HrmHeader />
                    <div className="card-container">
                        <Card title="Leave Request" number="04" />
                        <Card title="Attendance" number="10" />
                        <Card title="Total Employees" number="24" />
                    </div>
                    <div className="graph-container">
                        <Graph title="PayRoll" number="48" />
                        <Graph title="Task Request" number="16" />
                    </div>
                    <div >

                    <div className='anouncement-container'>  <Announcements /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HrmPortalDashboard