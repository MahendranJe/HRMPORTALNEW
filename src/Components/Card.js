import React from "react";
import '../Styles.css';
function Card({ title, number, subtext, change }) {
  return (
    <div className="card1">
      <h2>{title}</h2>
      <p className="number">{number}</p>
      {subtext && <p className="subtext">{subtext}</p>}
      {change && <p className="change">{change}</p>}
    </div>

  );
}

export default Card;
