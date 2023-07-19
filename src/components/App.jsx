import { useState } from 'react'
import Heading from './heading'
import Footer from './footer'
import "../styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading/>
      <Footer/>
    </>
  )
}

export default App
