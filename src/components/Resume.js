import React from 'react';
import '../styles/Resume.css'
import ResumeHeader from './ResumeHeader'
import Education from './Education'

function Resume(){
  return (
  <div className="resume-body">

    <ResumeHeader />
    <hr />
    <Education />
    <hr />

  </div>
  )
}

export default Resume