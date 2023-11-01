import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Product from '../Product/Product'
import ProductAdd from '../Product/ProductAdd'
import ProductEdit from '../Product/ProductEdit'
import ProductDetails from '../Product/ProductDetails'
function AllRoutes() {
  return (
    <div>AllRoutes
         <Routes>
            <Route path='/' element={<Product/>}></Route>
            <Route path='/addproduct' element={<ProductAdd/>}></Route>
            <Route path='/edit/:id' element={<ProductEdit/>}></Route>
            <Route path = '/details/:id' element = {<ProductDetails/>}></Route>
         </Routes>
    </div>
  )
}
export default AllRoutes;