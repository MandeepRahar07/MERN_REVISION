import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Product from '../Product/Product'
import ProductAdd from '../Product/ProductAdd'
import ProductEdit from '../Product/ProductEdit'
function AllRoutes() {
  return (
    <div>AllRoutes
        <Routes>
            <Route path='/' element={<Product/>}></Route>
            <Route path='/addproduct' element={<ProductAdd/>}></Route>
            <Route path='/edit/:id' element={<ProductEdit/>}></Route>
        </Routes>
    </div>
  )
}
export default AllRoutes