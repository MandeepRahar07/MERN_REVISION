import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProductDatabyid } from '../Redux/actions';


function ProductDetails() {
    const {id} = useParams();
    const productdetail = useSelector((state) => state.product.productdetail);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchProductDatabyid(id))
    },[id])
  return (
    <div>ProductDetails

        <div>
            {
              <div>

                <h1>{productdetail.name}</h1>
                <h3>{productdetail.price}</h3>
                <h4>{productdetail.category}</h4>
              </div>
            }
        </div>
    </div>
  )
}

export default ProductDetails