import axios from "axios";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";


const ProductEdit = ()=>{
    const {id} = useParams();
    const[productdetails, SetProductDetails] = useState({});

    const Fetchdata = async()=>{
        try{

            const respone = await axios.get(`http://localhost:8000/product/${id}`)
        }
        catch(err){
            console.log(err)
        }finally{
              console.log("all set man");
        }

    }

    return(
        <div>
  <h1>Update your product carefully</h1>
        </div>
    )
}

export default ProductEdit;