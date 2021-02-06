import React, { Component } from 'react'
import SkillsComponent from './SkillsComponent'
import '../styles/SkillsContainer.css'

export default class SkillsContainer extends Component {
  constructor() {
    super()
    this.state = {
      skill: "",
    }
  }


  render() {
    return (
      <div>
        <h3 className="skills">Skills</h3>
        <form className="skills">
            <input 
              type="text"
              placeholder="+ skill"
            />
          </form>
        <div className="skills-wrapper">

        <div className="skills-list">
          {/* might pass skills array into the prop so this div wont exist if there aren't any skills */}
          <SkillsComponent />
          <SkillsComponent />
          <SkillsComponent />

        </div>

        </div>


      </div>
    )
  }
}
