import React from 'react'
import { Routes, Route} from 'react-router-dom';
import ReduxProduct from './ReduxProduct';
import EditData from './EditData';
import ReducEdit from './ReducEdit';
function RouteALL()
 {

  return (
   <div>
    <Routes>
        <Route path='/' element={ReduxProduct}> </Route>
        <Route path ='/edit/:id' element = {<ReducEdit/>}></Route>
    </Routes>
   </div>
  )
}

export default RouteALL