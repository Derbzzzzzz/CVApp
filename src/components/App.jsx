import { useState } from 'react'
import Heading from './Heading'
import Content from './Content'
import Footer from './Footer'
import "../styles/App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Heading/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
