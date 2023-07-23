import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"
import General from "./General"
import Education from "./Education"
import Professional from "./Professional"
import Submission from "./Submission"

function createData(){
  return{
    firstName: "Ryan",
    lastName: "Wahle",
    email: "ryanwahle7@gmail.com",
    phoneNumber: "314-882-8066",
    college: null,
    degreeType: null,
    degreeField: null,
    collegeStartDate: null,
    collegeEndDate: null,
    company: null,
    position: null,
    workStartDate: null,
    workEndDate: null,
    responsibilities: null
  }
}

function createInitialState(){
  return{
    page: 3,
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
    return <Professional state={state} stateChanger={setState}/>
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