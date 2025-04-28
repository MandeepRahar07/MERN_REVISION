import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
  return (
    <div>Navbar
<li onClick={()=> navigate('/class')}>
    Home
</li>

    </div>
  )
}

export default Navbar