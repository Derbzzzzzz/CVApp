import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"
import General from "./General"
import Education from "./Education"
import Professional from "./Professional"

function createData(){
  return{
    firstName: "Ryan",
    lastName: "Wah",
    email: "a@a",
    phoneNumber: "777-777-7777",
    college: null,
    degreeType: null,
    degreeField: null,
    collegeStartDate: null,
    collegeEndDate: null,
    company: null,
    position: null,
    workStartDate: null,
    workEndDate: null,
    responsibilties: null
  }
}

function createInitialState(){
  return{
    page: 0,
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
}

function Content() {
  const [state, setState] = useState(createInitialState(0))

  return (
    <>
      <div className="content">
          <SideBar state={state} stateChanger={setState}/>
          {loadPage(state, setState)}
      </div>
    </>
  )
}

export default Content