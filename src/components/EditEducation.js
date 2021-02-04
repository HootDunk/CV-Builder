import React from 'react';


// Uncontrolled form for updating the degrees array in the Education components state
// state updates occur once form is submitted.  Form values are accessed using refs.
class EditEducation extends React.Component{
  constructor() {
    super();
    // create a ref to store DOM inputs
    this.school = React.createRef();
    this.degreeTitle = React.createRef();
    this.yearBegan = React.createRef();
    this.yearEnd = React.createRef();
    this.gpa = React.createRef();
  }
  
  render() {
    return (
      <div>
        <form 
          onSubmit={(e) =>  {
            this.props.updateObject(
              e, this.props.id, this.school.current.value, 
              this.yearBegan.current.value, this.yearEnd.current.value, this.degreeTitle.current.value, 
              this.gpa.current.value
                )
              }
            }
          className="school-info"
        >
          <div className="school">
            <input
              required
              type="text"
              defaultValue={this.props.school}
              ref={this.school}
              placeholder="Name of University"
            />
            <br />
            <input
              required
              className="year"
              type="text"
              defaultValue={this.props.yearBegan}
              ref={this.yearBegan}
              placeholder="YYYY"
            />
            -
            <input
  
              required
              className="year"
              type="text"
              defaultValue={this.props.yearEnd}
              ref={this.yearEnd}
              placeholder="YYYY"
            />
          </div>
          <div className="degree">
            <input
              onChange={this.props.handleChange}
              required
              type="text"
              defaultValue={this.props.degreeTitle}
              ref={this.degreeTitle}
              placeholder="Title of Degree"
            />
            <br />
            <input
              type="text"
              defaultValue={this.props.gpa}
              ref={this.gpa}
              placeholder="GPA"
            />
          </div>
          <div className="button-div">
  
            <button onClick={() => this.props.toggleForm(this.props.id)} type="button">Close</button>
            <button>Submit</button>
          </div>
  
        </form>
      </div>
      )
  }
}

export default EditEducation