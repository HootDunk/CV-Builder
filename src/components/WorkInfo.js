import React from 'react';

function WorkInfo(props) {
  return (
    <div className="work-info">
      <div className="left-column">
        <p>{props.company}</p>
        <p className="sub-text">{props.location}</p>
        <p className="sub-text">{props.yearBegan} - {props.yearEnd}</p>
      </div>
      <div className="right-column">
        <p>{props.title}</p>
        <p className="sub-text">{props.description}</p>
      </div>
      <div className="button-div">
          <i onClick={() => props.editExperience(props.id)} className="fas fa-edit"></i>
          <i onClick={() => props.handleDelete(props.id)} className="fas fa-trash"></i>
        </div>
    </div>
  )
}

export default WorkInfo