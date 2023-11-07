import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Login/Login'
import SignupD from '../Signup/Signup'
import About from '../About/About'
function AllRoutes() {
  return (
    <div>AllRoutes

     <Routes>
        <Route path="/" element={<About/>}>About</Route>
        <Route path="/login" element={<Login/>}>Log kr le </Route>
        <Route path="/signup" element={<SignupD/>}>Signup kr le </Route>
     </Routes>

    </div>
  )
}

export default AllRoutes