import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {

    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3001/main/pro`);
            const data = await response.json();
            if (response.ok) {
                setProductData(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const EditProduct = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                productData.map((e) => (
                    <div key={e.id}>
                        <p>Price: {e.price}</p>
                        <button onClick={()=> EditProduct(e.id)}>Edit</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Product;
