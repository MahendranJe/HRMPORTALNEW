import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import Attendance from './Components/Attendance';
import HrmPortalDashboard from './Components/HrmPortalDashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/addEmployee" element={<AddEmployee/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/hrmportal' element={<HrmPortalDashboard/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
