
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Product = () => {

    const [data, setData] = useState([])
    const navigate = useNavigate();

    const AllProudct = async () => {
        try {
            const response = await axios.get("http://localhost:8000/product")
            console.log( "response",response.data);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        AllProudct();
    }, [])
    const Deleteproduct = (id) => {
        const filteredData = data.filter((item) => item.id !== id); // Filter out the product with the given ID
        setData(filteredData); // Update the state with the filtered data
      };


      const ProductDetail = (id)=>{
navigate(`/product/${id}`);
      }

      const EditProductDetails = (id)=>{
        navigate(`/productedit/${id}`)
      }
    return (
        <div>
            <h1>ye hai product page</h1>
            {
                data.map((e)=>{
                    return(
                        <div>
                            <h1>{e.name}</h1>
                            <button onClick={() => Deleteproduct(e.id)}>Delete</button>
                            <button onClick={()=> ProductDetail(e.id)}>Details</button>
                            <button onClick={()=> EditProductDetails(e.id)} >Edit</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Product;