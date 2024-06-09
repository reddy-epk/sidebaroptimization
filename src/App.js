import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import ProjectFlowLayout from './components/ProjectFlowLayout'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project-flow' element={<ProjectFlowLayout />} />
      </Routes>
    </Router>
  )
}

export default App
