import { useState } from 'react'
import "../styles/Sidebar.css"

function SideBar() {
    const [active, setActive] = useState(0)

  return (
    <>
      <div className="sidebar">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">General Info</li>
        <li className="list-group-item">Educational Experience</li>
        <li className="list-group-item">Professional Experience</li>
      </ul>
      </div>
    </>
  )
}

export default SideBar