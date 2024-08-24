import React from 'react'
import Home from './home/Home';
import {Navigate ,Routes, Route} from "react-router-dom"
import Courses from './Courses/Courses';
import Signup from './components/Signup';
//that react library is used to show the toast message
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div>
      {/* <Home />
      <Course/> */}
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
         <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;