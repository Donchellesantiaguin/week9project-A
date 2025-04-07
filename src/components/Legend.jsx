import React from "react";
import heartIcon from "../assets/heart-icon.png";
import questionIcon from "../assets/question-icon.png"; 
import trashIcon from "../assets/trash-icon.png"; 

const Legend = () => {
  return (
    <div className="legend">
      <div className="legend-item">
        <img src={heartIcon} alt="Heart" />
        <p>Like</p>
      </div>
      <div className="legend-item">
        <img src={questionIcon} alt="Question Mark" />
        <p>Haven't seen</p>
      </div>
      <div className="legend-item">
        <img src={trashIcon} alt="Trash" />
        <p>Delete</p>
      </div>
    </div>
  );
};

export default Legend;
