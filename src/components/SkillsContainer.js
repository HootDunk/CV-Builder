import React, { Component } from 'react'
import SkillsComponent from './SkillsComponent'
import uniqid from 'uniqid'
import '../styles/SkillsContainer.css'

export default class SkillsContainer extends Component {
  constructor() {
    super()
    this.state = {
      skill: "",
      skills: [],
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      const obj = {
        id: uniqid(),
        text: this.state.skill,
      }
      let list = prevState.skills.concat(obj);
      return {
        skill: "",
        skills: list,
      }
    })
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      const list = prevState.skills.filter(item => item.id !== id)
      return {
        skills: list,
      }
    })
  }


  render() {
    return (
      <div>
        <SkillsComponent
          skill={this.state.skill}
          skills={this.state.skills}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />

      </div>
    )
  }
}
