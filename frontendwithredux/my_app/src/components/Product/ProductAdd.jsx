import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostProductdata, fetchProductData } from '../Redux/actions';

function ProductAdd() {
    const [adddata, setadddata] = useState({
        name: "",
        price: "",
        category: ""
    });


    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setadddata({
            ...adddata,
            [name]: name === "price" ? parseFloat(value) : value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(PostProductdata(adddata));
        dispatch(fetchProductData());
    };
    console.log(adddata);
    return (
        <div>
            <h2>ProductAdd</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={adddata.name}
                    onChange={handleChange}
                />
                
                <input
                    type="number"
                    name="price"
                    value={adddata.price}
                    onChange={handleChange}
                />

                <select
                    name="category"
                    value={adddata.category}
                    onChange={handleChange}
                >
                    <option value="phone">Phone</option>
                    <option value="watch">Watch</option>
                    <option value="airpods">Airpods</option>
                </select>
                 

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductAdd;
