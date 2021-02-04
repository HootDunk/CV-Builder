import React from 'react';

function EducationForm(props){
  if (props.isActive){
    return (
    <div>
      <form onSubmit={props.handleSubmit} className="school-info">
        <div className="school">
          <input
            onChange={props.handleChange}
            required
            type="text"
            value={props.school}
            name="school"
            placeholder="Name of University"
          />
          <br />
          <input
            onChange={props.handleChange}
            required
            className="year"
            type="text"
            value={props.yearBegan}
            name="yearBegan"
            placeholder="YYYY"
          />
          -
          <input
            onChange={props.handleChange}
            required
            className="year"
            type="text"
            value={props.yearEnd}
            name="yearEnd"
            placeholder="YYYY"
          />
        </div>
        <div className="degree">
          <input
            onChange={props.handleChange}
            required
            type="text"
            value={props.degreeTitle}
            name="degreeTitle"
            placeholder="Title of Degree"
          />
          <br />
          <input
            onChange={props.handleChange}
            required
            type="text"
            value={props.gpa}
            name="gpa"
            placeholder="GPA"
          />
        </div>
        <div className="button-div">
          <button type="button">Close</button>
          <button>Submit</button>
        </div>

      </form>
    </div>
    )
  } else {
    return (
      <button onClick={props.setFormToActive}>plus</button>
      )
  }

}

export default EducationForm