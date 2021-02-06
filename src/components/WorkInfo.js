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
          <button onClick={() => props.editExperience(props.id)}>Edit</button>
          <button onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
    </div>
  )
}

export default WorkInfo