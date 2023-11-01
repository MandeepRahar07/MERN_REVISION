import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductDatabyid } from '../Redux/actions';


function ProductDetails() {
    const {id} = useParams();
    const productdata = useSelector((state) => state.product.productdata);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchProductDatabyid(id))
    },[id])
  return (
    <div>ProductDetails

        <div>
            {
                <h1>{productdata.name}</h1>
            }
        </div>
    </div>
  )
}

export default ProductDetails