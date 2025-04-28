import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostReq, PostReqfail, PostReqsuc } from '../redux/action';

function AddBottel() {
    const Data = useSelector(state => state.data);
    const dispatch = useDispatch();
    const [Formdata, setFormdata] = useState({
        name: "",
    });

    const Handlechange = (e) => {
        setFormdata(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault(); // ✅ fixed
        dispatch(PostReq());
        try {
            await axios.post(`http://localhost:8080/bottel`, Formdata);
            dispatch(PostReqsuc(Formdata)); // ✅ good
            setFormdata({name : ""})
        } catch (err) {
            dispatch(PostReqfail());
            console.log(err);
        }
    };

    return (
        <div>AddBottel
            <div>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="">name</label>
                    <input
                        onChange={Handlechange}
                        type="text"
                        name="name" // ✅ fixed
                        value={Formdata.name}
                        placeholder='Bottel Name'
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddBottel;
