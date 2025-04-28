import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Products() {

 const [ProductData, setProductData] = useState([]);
 const navigate = useNavigate();

 const fetchdata = async()=>{
  try{
   const response = await fetch(`http://localhost:3001/product`);
   const Data = await response.json();

   if(response.ok){
    console.log(Data.result)
    setProductData(Data.result);
   }
  }catch(err){
    console.log(err);
  }
 }

 useEffect(()=>{
  fetchdata();
 },[]);


  return (
    <div>
<div>
 <button onClick={()=> navigate("/addproduct")}>Add a product</button>
</div>
      <div>
        {
          ProductData.map((e)=>{
            return(
              <div>
                 <p>{e.price}</p>
                 <p>{e.discount}</p>
                 <br/>
                 <button>Edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products