import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getrequest } from '../Redux/actions';

function Products() {

const data = useSelector((state)=> state.ProductData.data);

const dispatch = useDispatch();

useEffect(()=>{
    dispatch( getrequest())
},[]);

  return (
    <div>Products
        {
            <h1>{
                data.map((e,i)=>{
                    return <div key={i}>
                        <p>{e.name}</p>
                    </div>
                })
                }
                </h1>
        }
    </div>
  )
}

export default Products