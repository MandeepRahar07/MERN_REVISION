import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const [product, setProduct] = useState({
        price: "",
        discount: "",
        pic_url: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch product details
    const fetchAPI = async () => {
        try {
            const response = await fetch(`http://localhost:3001/main/pro/${id}`);
            const data = await response.json();
            setProduct(data[0]); // Assuming the API returns an array
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/main/pro/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                alert("Product updated successfully!");
                navigate("/"); // Redirect to the main product page
            } else {
                console.error("Failed to update product");
            }
        } catch (err) {
            console.error("Error updating product:", err);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Price:</label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Discount:</label>
                    <input
                        type="text"
                        name="discount"
                        value={product.discount}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Picture URL:</label>
                    <input
                        type="text"
                        name="pic_url"
                        value={product.pic_url}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditProduct;
