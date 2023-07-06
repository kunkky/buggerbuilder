import React from 'react'
import BuggerBuilder from './Pages/BuggerBuilder'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BuggerBuilder />}/>
    </Routes>
  )
}

export default App