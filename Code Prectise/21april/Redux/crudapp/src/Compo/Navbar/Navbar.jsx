import React from 'react'
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
  return (
    <div>Navbar
        <li onClick={()=> navigate("/country") }>Country Details</li>
    </div>
  )
}

export default Navbar