import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { prt, prtf, prts, rts } from './redux/action';

function AddPhone() {
    const navigate = useNavigate();
    const state = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        title: ""
    })

    const Handlechange = (e) => {
        setFormdata((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }



    const Handlesubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(prt());
            const response = await axios.post(`https://dummyjson.com/products/add`, formdata);
            dispatch(prts());  
            console.log(response.data);
            navigate('/')
        } catch (err) {
            dispatch(prtf());
            console.log(err);
        }
    }
    

    return (
        <div>AddPhone
            <form action="" onSubmit={Handlesubmit}>
                <label htmlFor="">Title</label>
                <input type="text"
                    name='title'
                    value={formdata.title}
                    onChange={Handlechange}
                    placeholder='Title Name'
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddPhone