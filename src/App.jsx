//App.jsx
import { useState } from 'react'
import './App.css'

import Nav from './Navbar/Nav'
import Home from './page/Home/Home'
import Second from './page/about/second'
import Socialmedia from './page/SocialMedia/socialmedia'
import Content from './page/conten-page/content'
import Qustion from './page/qustions/qustin'
import Fotter from './page/fotter/fotter'

function App() {
  const [show, setshow] = useState(false)

  return (
    <>
      <Nav show={show} setshow={setshow} />
      <Home/>
      <Second/>
      <Socialmedia/>
      <Content/>
      <Qustion/>
      <Fotter/>
    </>
  )
}

export default App
