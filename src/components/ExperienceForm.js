import React from 'react';

function ExperienceForm(props){
  if (props.isActive){
    return (
    <div>

      <form onSubmit={props.id? (e) => props.submitObjectChange(e, props.id) : props.handleSubmit} className="work-info">
        <div className="left-column">
          <input
            onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
            required
            type="text"
            value={props.company}
            name="company"
            placeholder="Company"
          />
          <br />
          <input
            onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
            className="sub-text"
            required
            type="text"
            value={props.location}
            name="location"
            placeholder="Job Location"
          />
          <br />
          <input
            onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
            className="sub-text year"
            required
            type="text"
            value={props.yearBegan}
            name="yearBegan"
            placeholder="YYYY"
          />-
          <input
            onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
            className="sub-text year"
            required
            type="text"
            value={props.yearEnd}
            name="yearEnd"
            placeholder="YYYY"
          />
        </div>

        <div className="right-column">
          <input
              onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
              required
              type="text"
              value={props.title}
              name="title"
              placeholder="Job Title"
          />
          <br />
          <textarea
            onChange={props.id? (event) => props.handleObjectChange(event, props.id) : props.handleChange}
            value={props.description}
            name="description"
          />
        </div>

        <div className="button-div">
          <button 
            onClick={(props.id)? () => props.toggleForm(props.id) : props.toggleForm}
            type="button"
          > Close
          </button>
          <button>Submit</button>
        </div>
        
      </form>
    </div>

    
    )
  } else {
    return (
      <button onClick={props.toggleForm}>plus</button>
      )
  }

}

export default ExperienceForm