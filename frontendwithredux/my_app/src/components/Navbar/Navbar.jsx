import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>Navbar
        <Link to='/'> ALL PRODUCT</Link>
       <Link to='/addproduct'> ADD PRODUCT</Link>
    </div>
  )
}

export default Navbar