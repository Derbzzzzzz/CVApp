import { useState } from 'react'
import Heading from './heading'
import "../styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading/>
    </>
  )
}

export default App
