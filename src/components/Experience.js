import uniqid from 'uniqid'
import React from 'react';
import '../styles/Experience.css'
import ExperienceForm from './ExperienceForm'
import WorkInfo from './WorkInfo'

class Experience extends React.Component{
  // I think I should do like I did the school one but make the form component controlled this time.
  // I doubt there will be any drawbacks.  Should be easy since the components are so similar.
  constructor() {
    super()
    this.state = {
      jobs: [
        {
          id: "ksldjf;ldks",
          company: "Mutual of Omaha",
          yearBegan: "2017",
          yearEnd: "2018",
          location: "Saint Louis",
          description: "Pretty much did nothing.  learned some python which was cool.",
          title: "Finance Intern",
          activeEdit: false,
        }
      ],
      formIsActive: true,
      company: "",
      location: "",
      yearBegan: "",
      yearEnd: "",
      title: "",
      description: "Write approximately 2-3 sentences",
    }
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      const list = prevState.jobs.filter(item => item.id !== id)
      return {
        jobs: list,
      }
    })
  }

  toggleForm = () => {
    this.setState({ formIsActive: !this.state.formIsActive })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const obj = {
      id: uniqid(),
      company: this.state.company,
      yearBegan: this.state.yearBegan,
      yearEnd: this.state.yearEnd,
      location: this.state.location,
      description: this.state.description,
      title: this.state.title,
      activeEdit: false,
    }
    this.setState(prevState => {
      const list = prevState.jobs.concat(obj);
      return {
        jobs: list,
        formIsActive: false,
        company: "",
        location: "",
        yearBegan: "",
        yearEnd: "",
        title: "",
        description: "Write approximately 2-3 sentences",
      }
    })
  }

  toggleObject = (id) => {
    const index = this.state.jobs.findIndex(element => element.id === id)
    let newArray = [...this.state.jobs]
    newArray[index] = {...newArray[index], activeEdit: !newArray[index].activeEdit}
    this.setState({
      jobs: newArray,
    })
  }

  handleObjectChange = (event, id) => {
    const {name, value} = event.target;
    const index = this.state.jobs.findIndex(element => element.id === id)
    let newArray = [...this.state.jobs]
    newArray[index] = {...newArray[index], [name]: value}
    this.setState({
      jobs: newArray,
    })
  }

  submitObjectChange = (event, id) => {
    event.preventDefault();
    this.toggleObject(id);
  }

  // just need to edit the info.  Should be able to re-use the form this time
  // not sure if I can use the state from the item method or not.
  // 
  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Work Experience</h3>
          {this.state.jobs.map((item) => {
            if(!item.activeEdit){
              return (
                <WorkInfo
                  key={item.id}
                  id={item.id}
                  company={item.company}
                  location={item.location}
                  yearBegan={item.yearBegan}
                  yearEnd={item.yearEnd}
                  title={item.title}
                  description={item.description}
                  handleDelete={this.handleDelete}
                  editExperience={this.toggleObject}
                />
            )
            } else {
              return (
                <ExperienceForm
                  key={item.id}
                  id={item.id}
                  isActive={true}
                  company={item.company}
                  location={item.location}
                  yearBegan={item.yearBegan}
                  yearEnd={item.yearEnd}
                  title={item.title}
                  description={item.description}
                  handleObjectChange={this.handleObjectChange}
                  toggleForm={this.toggleObject}
                  submitObjectChange={this.submitObjectChange}
                />
              )
            }

          })}
          <ExperienceForm
            isActive={this.state.formIsActive}
            toggleForm={this.toggleForm}
            description={this.state.description}
            company={this.state.company}
            location={this.state.location}
            yearBegan={this.state.yearBegan}
            yearEnd={this.state.yearEnd}
            title={this.state.title}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          /> 
      </div>
    )

  }

}

export default Experience;