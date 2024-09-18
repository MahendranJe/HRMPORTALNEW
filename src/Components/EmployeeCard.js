import React from "react";
import '../Styles.css';
function EmployeeCard({ title, number, subtext, change, icons, onClick }) {
  return (
    <div className="employee-card" onClick={onClick}>

      <div >
        {icons && <icon className="icons-style">{icons}</icon>}
      </div>
      {subtext && <p className="subtext">{subtext}</p>}
      {change && <p className="change">{change}</p>}
    </div>

  );
}

export default EmployeeCard;
