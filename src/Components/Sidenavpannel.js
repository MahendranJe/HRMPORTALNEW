import React from 'react';
import { FaThLarge, FaUser, FaCalendarCheck, FaMoneyBillWave, FaTasks, FaBullhorn, FaHeadset, FaCog } from 'react-icons/fa';
import '../Styles.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav-title">WeHR</h2>
      <ul className="sidenav-menu">
        <li >
          <Link to ='/dashboard' className="sidenav-item">
          <FaThLarge style={{marginRight:'10px'}}/> Dashboard
          </Link>
        </li>
        <li >
        <Link to="/employee" className="sidenav-item">
          <FaUser style={{marginRight:'10px'}}/> Employee
          </Link>
        </li>
        <li >
          <Link to ="/attendance" className="sidenav-item">
          <FaCalendarCheck style={{marginRight:'10px'}}/> Attendance
          </Link>
        </li>
        <li className="sidenav-item">
          <FaMoneyBillWave style={{marginRight:'10px'}}/> PayRoll
        </li>
        <li className="sidenav-item">
          <FaTasks style={{marginRight:'10px'}} /> Task
        </li>
        <li className="sidenav-item">
          <FaBullhorn style={{marginRight:'10px'}}/> Announcement
        </li>
      </ul>
      <div className="sidenav-footer">
        <h6>OTHER</h6>
        <ul className="sidenav-menu">
          <li className="sidenav-item">
            <FaHeadset style={{marginRight:'10px'}}/> Support
          </li>
          <li className="sidenav-item">
            <FaCog style={{marginRight:'10px'}}/> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
