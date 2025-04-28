import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return (
        <div>Navbar
            <li onClick={() => navigate("/state")} >State Informations</li>
            <li onClick={()=> navigate("/addstate")}>Add a new state</li>
        </div>
    )
}

export default Navbar