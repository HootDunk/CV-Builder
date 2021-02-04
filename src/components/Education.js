import React from 'react';
import '../styles/Education.css'
import SchoolInfo from "./SchoolInfo"
import EducationForm from "./EducationForm"
import uniqid from 'uniqid'

class Education extends React.Component {
  constructor(){
    super()
    this.state = {
      degrees: [],
      formIsActive: true,
      school: "",
      yearBegan: "",
      yearEnd: "",
      degreeTitle: "",
      gpa: "",
    }
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      id: uniqid(),
      school: this.state.school,
      yearBegan: this.state.yearBegan,
      yearEnd: this.state.yearEnd,
      degreeTitle: this.state.degreeTitle,
      gpa: this.state.gpa,
    }
    this.setState(prevState => {
      const list = prevState.degrees.concat(obj);
      return {
        degrees: list,
        formIsActive: false,
        school: "",
        yearBegan: "",
        yearEnd: "",
        degreeTitle: "",
        gpa: "",
      }
    })
  }

  setFormToActive = () => {
    this.setState({ formIsActive: true })
  }


  render() {
    return (
      <div>
        <h3>Education</h3>
        {this.state.degrees.map((item) => {
          return(
            <SchoolInfo
              key={item.id}
              school={item.school}
              yearBegan={item.yearBegan}
              yearEnd={item.yearEnd}
              degreeTitle={item.degreeTitle}
              gpa={item.gpa}
            />
          )
        })}

        <EducationForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          setFormToActive={this.setFormToActive}
          isActive={this.state.formIsActive}
          school={this.state.school}
          yearBegan={this.state.yearBegan}
          yearEnd={this.state.yearEnd}
          degreeTitle={this.state.degreeTitle}
          gpa={this.state.gpa}
        />
      </div>

      
    )
  }
}

export default Education


// clicking edit on the component will cause the form to render with the matching state pre filled?
// clicking edit calls function in Education.js that finds the state object index and then renders it with the form??
// I think each object will need a keyValue like isEditing and this is what gets changed when edit is clicked. School-Info will
// conditionally render a prefilled form to make edits from?




