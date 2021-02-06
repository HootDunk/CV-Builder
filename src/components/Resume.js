import React from 'react';
import '../styles/Resume.css'
import ResumeHeader from './ResumeHeader'
import Education from './Education'
import Experience from './Experience'
import SkillsContainer from './SkillsContainer'

function Resume(){
  return (
  <div className="resume-body">
    <ResumeHeader />
    <hr />
    <Education />
    <hr />
    <Experience />
    <hr />
    <SkillsContainer />
  </div>
  )
}

export default Resume