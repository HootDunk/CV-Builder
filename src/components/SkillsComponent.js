import React from 'react'

export default function SkillsComponent(props) {
  return (
    <div>
      <h3 className="skills">Skills</h3>
      <form onSubmit={props.handleSubmit} className="skills">
          <input 
            type="text"
            placeholder="+ Skill"
            name="skill"
            value={props.skill}
            onChange={props.handleChange}
      />
      </form>
      <div className="skills-list">
      {props.skills.map((skill) => {
          return (
              <div key={skill.id} className="skill-card">
                <div>
                  <p className="skill-element">{skill.text}</p>
                  <i 
                    className="fas fa-times"
                    onClick={() => props.handleDelete(skill.id)}
                  ></i>
                </div>
              </div>
            )
          })
      }
      </div>


    </div>

  )
}
