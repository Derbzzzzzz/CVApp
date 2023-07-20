import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"
import General from "./General"
import Education from "./Education"
import Professional from "./Professional"

function createInitialState(page){
  return{
    page: page,
  }
}

function loadPage(state){
  console.log(state.page)
  if(state.page === 0){
    return <General/>
  }
  else if(state.page === 1){
    return <Education/>
  }
  else if(state.page === 2){
    return <Professional/>
  }
}

function Content() {
  const [state, setState] = useState(createInitialState(0))

  return (
    <>
      <div className="content">
          <SideBar state={state} stateChanger={setState}/>
          {loadPage(state)}
      </div>
    </>
  )
}

export default Content