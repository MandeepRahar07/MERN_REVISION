import React from 'react'
import {useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate();
  return (
    <div>Navbar
        <div>
            <li onClick={ ()=> navigate('/laptop') }>Laptop info</li>
        </div>
    </div>
  )
}

export default Navbar;