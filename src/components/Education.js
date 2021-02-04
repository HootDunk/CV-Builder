import React from 'react';
import '../styles/Education.css'
import SchoolInfo from "./SchoolInfo"
import EducationForm from "./EducationForm"
import uniqid from 'uniqid'
import EditEducation from "./EditEducation"

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
  }

  updateObject = (event, id, school, yearBegan, yearEnd, degreeTitle, gpa) => {
    event.preventDefault();
    const index = this.state.degrees.findIndex(element => element.id === id)
    let newArray = [...this.state.degrees]
    newArray[index] = {
      ...newArray[index],
      activeEdit: !newArray[index].activeEdit,
      school: school,
      yearBegan: yearBegan,
      yearEnd: yearEnd,
      degreeTitle: degreeTitle,
      gpa: gpa
    }
      this.setState({
        degrees: newArray,
      })
  }

  // change this to ToggleActive and use it for the close button in the form
  toggleForm = () => {
    this.setState({ formIsActive: !this.state.formIsActive })
  }

  /* Why reference state in EditEducation? 
    it was originally going to be a controlled form. 
    It shouldn't make a difference either way so I'm leaving it in case I change my mind.*/
  render() {
    return (
      <div>
        <h3>Education</h3>
        {this.state.degrees.map((item, index) => {
          if(item.activeEdit){
            return (
              <EditEducation 
              updateObject={this.updateObject}
              toggleForm={this.toggleObject}
              key={this.state.degrees[index].id}
              id={this.state.degrees[index].id}
              school={this.state.degrees[index].school}
              yearBegan={this.state.degrees[index].yearBegan}
              yearEnd={this.state.degrees[index].yearEnd}
              degreeTitle={this.state.degrees[index].degreeTitle}
              gpa={this.state.degrees[index].gpa}
            />
            )
          } else {
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
          }
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





