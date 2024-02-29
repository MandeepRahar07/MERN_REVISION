import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to ='/'>
        <div>Home</div>
        </Link>
        <Link to='/contact'>
        <div>contact</div>
        </Link>
        <Link to ='product'>
        <div>
            Product
        </div>
        </Link>
    </div>
  )
}

export default Navbar