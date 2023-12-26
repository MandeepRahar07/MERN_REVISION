import React from 'react'
import { Routes , Route} from 'react-router-dom'
import EditThunk from './EditThunk'

function RouteThunk() {
  return (
    <div>
        <Routes>
            <Route path = "/edit/:id" element ={<EditThunk/>}> </Route>
        </Routes>
    </div>
  )
}

export default RouteThunk