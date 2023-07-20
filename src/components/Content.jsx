import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"
import General from "./General"

function Content() {
  const [state, setState] = useState(0)

  return (
    <>
      <div className="content">
          <SideBar state={state} stateChanger={setState}/>
          <General/>
      </div>
    </>
  )
}

export default Content