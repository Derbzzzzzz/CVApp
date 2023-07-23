import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"
import General from "./General"
import Education from "./Education"
import ExpMenu from "./ExpMenu"
import Professional from "./Professional"
import Submission from "./Submission"


function createData(){
  return{
    firstName: "Ryan",
    lastName: "Wahle",
    name: "Ryan Wahle",
    email: "ryanwahle7@gmail.com",
    phoneNumber: "314-882-8066",
    college: "University of Missouri",
    degreeType: "Bachelor of Science (BS)",
    degreeField: "Computer Science",
    collegeStartDate: '2013-07-07',
    collegeEndDate: '2018-09-09',
    experiences: [{
        expType: "Work Experience",
        org: "Career Center",
        position: "Specialist",
        startDate: "2022-07-07",
        endDate: null,
        responsibilities: "Worked",
    }],
    addExp(expType, org, position, startDate, endDate, responsibilities, index = -1){
      let exp = {
        expType: expType,
        org: org,
        position: position,
        startDate: startDate,
        endDate: endDate,
        responsibilities: responsibilities,
      }

      if(index <= -1){
        this.experiences.push(exp)
      }
      else{
        this.experiences[index] = exp
      }
    }
  }
}

function createInitialState(){
  return{
    page: 2,
    data: createData()
  }
}

function loadPage(state, setState){
  if(state.page === 0){
    return <General state={state} stateChanger={setState}/>
  }
  else if(state.page === 1){
    return <Education state={state} stateChanger={setState}/>
  }
  else if(state.page === 2){
    return <ExpMenu state={state} stateChanger={setState}/>
  }
  else if(state.page === 3){
    return <Submission state={state} stateChanger={setState}/>
  }
  
}

function Content() {
  const [state, setState] = useState(createInitialState())

  return (
    <>
      <div className="content">
        {state.page !== 3 && <SideBar state={state} stateChanger={setState}/>}
        {loadPage(state, setState)}
      </div>
    </>
  )
}

export default Content