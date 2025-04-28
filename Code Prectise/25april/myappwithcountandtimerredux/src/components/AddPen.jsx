import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { prt, prtf, prts } from './Redux/action';
import axios from 'axios';

function AddPen() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.data);

    const [formdata, setFormdata] = useState({
        title: ""
    });

    const Handlechange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value  
        });
    };

    const Handlesubmit = async (e) => {
        e.preventDefault();
        dispatch(prt());
        try {
            await axios.post('https://dummyjson.com/products', formdata);
            dispatch(prts());
        } catch (err) {
            dispatch(prtf());
            console.log(err);
        }
    };

    return (
        <div>
            AddPen
            <form onSubmit={Handlesubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"  
                    value={formdata.title}
                    placeholder="Title Name"
                    onChange={Handlechange}
                />
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default AddPen;
