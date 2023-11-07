import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ProductGetRequest } from '../Redux/actions';
import {useSelector} from 'react-redux';
function Product() {
     const ProductData = useSelector((state)=> state.Product.ProductData);
      console.log(ProductData);
     const Dispatch = useDispatch();
     useEffect(()=>{
        Dispatch(ProductGetRequest())
     },[])

  return (
    <div>Product
        <div>
            {
                ProductData.map((e)=>{
                    return <div key={e.id}>
                        <h1>{e.name}</h1>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Product