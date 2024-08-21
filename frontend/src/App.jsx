import React from 'react'
import Home from './home/Home';
import {Routes, Route} from "react-router-dom"
import Courses from './Courses/Courses';
function App() {
  return (
    <div>
      {/* <Home />
      <Course/> */}
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App;