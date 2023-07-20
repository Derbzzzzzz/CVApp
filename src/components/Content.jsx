import "../styles/Content.css"
import { useState } from 'react'

import SideBar from "./Sidebar"

function Content() {
  const [state, setState] = useState(0)

  return (
    <>
      <div className="content">
          <SideBar state={state}/>
          {/* FormSection */}
      </div>
    </>
  )
}

export default Content