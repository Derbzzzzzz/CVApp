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
    // firstName: "John",
    // lastName: "Doe",
    // name: "John Doe",
    // email: "johndoe@gmail.com",
    // phoneNumber: "123-546-8437",
    // school: "University of IDK",
    // degreeType: "Bachelor of Science",
    // degreeField: "Computer Science",
    // schoolEndDate: '2018-09-09',
    // gpa: "3.7/4.0",
    // experiences: [{
    //     expType: "Work",
    //     org: "Career Center",
    //     position: "Specialist",
    //     location: "Saint Louis, MO",
    //     startDate: "2022-07-07",
    //     endDate: "2023-01-01",
    //     responsibilities: "Worked",
    // }, {
    //     expType: "Volunteering/Service",
    //     org: "Food Bank",
    //     position: "General Volunteer",
    //     location: "Saint Louis, MO",
    //     startDate: "2022-07-07",
    //     endDate: null,
    //     responsibilities: "Put together food packages",
    // }, {
    //   expType: "Volunteering/Service",
    //   org: "Habitats for Humanity",
    //   position: "General Volunteer",
    //   location: "Saint Louis, MO",
    //   startDate: "2022-10-07",
    //   endDate: null,
    //   responsibilities: "Helped set up houses",
    // }, {
    //   expType: "Work",
    //   org: "Red Robin",
    //   position: "Server",
    //   location: "Serbia",
    //   startDate: "2022-10-07",
    //   endDate: null,
    //   responsibilities: "Waited on people\nHelped others\nAte food",
    // }, 
    // ],
    firstName: null,
    lastName: null,
    name: null,
    email: null,
    phoneNumber: null,
    school: null,
    degreeType: null,
    degreeField: null,
    schoolEndDate: null,
    gpa: null,
    experiences: [],
    addExp(expType, org, position, location, startDate, endDate, responsibilities, index = -1){
      let exp = {
        expType: expType,
        org: org,
        position: position,
        location: location,
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