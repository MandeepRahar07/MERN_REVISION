import React from 'react'
import { Link } from 'react-router-dom'
 import {useSelector} from 'react-redux'
function Navbar() {

    const CurrentUser = useSelector((state) => state.User.CurrentUser);
    console.log(CurrentUser);
  return (
    <div>
        <Link to ='/'>
        <button>About</button>
        </Link>

        <Link to = '/login'>
            {
            <Link to='/login'>
            <button>{CurrentUser && CurrentUser.name ? CurrentUser.name : "Login"}</button>
          </Link>
            }
        </Link>
         
        
        <Link to = '/signup'>
        <button>Signup</button>
        </Link>
    </div>
  )
}

export default Navbar