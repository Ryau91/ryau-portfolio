import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Work from './components/Work'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-[#ffffee]'>
      <Sidenav/>
      <Main/>
      <Projects/>
      <Work/>
      <AboutMe/>
      <Contact/>
    </div>
  )
}

export default App
