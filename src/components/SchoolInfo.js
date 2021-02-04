import React from 'react';
import "../styles/SchoolInfo.css"

function SchoolInfo(props){
  return (
    <div className="school-info">
      <div className="school">
        <p>{props.school}</p>
        <p>{props.yearBegan} - {props.yearEnd}</p>
      </div>
      <div className="degree">
        <p>{props.degreeTitle}</p>
        <p>{props.gpa}</p>
      </div>
      <div className="button-div">
        <button>Edit</button>
        <button>Delete</button>
      </div>

    </div>
  )
}

export default SchoolInfo