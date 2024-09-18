import React from "react";
import '../Styles.css';
import Graphimage from '../Images/Frame 52.png'
function Graph({ title, number, subtext, change }) {
  return (
    <div className="card2 display-flex">
        <div className="sub-card"> <h2>{title}</h2>
      <p className="number">{number}</p>
      {subtext && <p className="subtext">{subtext}</p>}
      {change && <p className="change">{change}</p>}</div>
      <div className="sub-card2">
        <img src={Graphimage}></img>
      </div>
     
    </div>

  );
}

export default Graph;
