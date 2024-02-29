import React from 'react'
import {Routes, Route} from 'react-router-dom';
import { Accordian } from '../components/Accordian';
import Contact from '../components/Contact';
import Product from '../components/Product/Product';

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Accordian/>}></Route>
            <Route path='/contact' element = {<Contact/>}></Route>
            <Route path='/product' element= {<Product/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes