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
      activeEdit: false,
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

  handleDelete = (id) => {
    this.setState(prevState => {
      const list = prevState.degrees.filter(item => item.id !== id)
      return {
        degrees: list,
      }
    })
  }

  toggleObject = (id) => {
    const index = this.state.degrees.findIndex(element => element.id === id)
    let newArray = [...this.state.degrees]
    newArray[index] = {...newArray[index], activeEdit: !newArray[index].activeEdit}
    this.setState({
      degrees: newArray,
    })
    
    // problem, we need a form with the state. not props.
    // I think we can re-use the education component if we make change/submit handles that are specific to the degrees array state.
    // will pass in different functions but can keep the props the same
  }

  // change this to ToggleActive and use it for the close button in the form
  toggleForm = () => {
    this.setState({ formIsActive: !this.state.formIsActive })
  }


  render() {
    return (
      <div>
        <h3>Education</h3>
        {this.state.degrees.map((item) => {
          return(
            <SchoolInfo
              handleDelete={this.handleDelete}
              editSchool={this.toggleObject}
              key={item.id}
              id={item.id}
              school={item.school}
              yearBegan={item.yearBegan}
              yearEnd={item.yearEnd}
              degreeTitle={item.degreeTitle}
              gpa={item.gpa}
              activeEdit={item.activeEdit}
            />
          )
        })}

        <EducationForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          toggleForm={this.toggleForm}
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




