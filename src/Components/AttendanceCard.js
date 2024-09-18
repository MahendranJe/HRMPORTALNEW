import React from "react";
import '../Styles.css';
function AttendanceCard({ title, number, subtext, change ,icons ,onClick }) {
  return (
    <div className="attendanceCard" onClick={onClick}>
      <h2>{title}</h2>
      <div >
        {icons && <icon className="icons-style">{icons}</icon>}
      </div>
      {subtext && <p className="subtext">{subtext}</p>}
      {number && <p className="number">{number}</p>}
    </div>

  );
}

export default AttendanceCard;
