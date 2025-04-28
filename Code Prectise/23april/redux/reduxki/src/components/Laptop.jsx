import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LPreq, LPreqFail, LPreqSuc } from './redux/action';

function Laptop() {
    const Data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const fetchdata = async () => {
        try {
            dispatch(LPreq());
            const res = await axios.get(`http://localhost:8088/lp`);
            dispatch(LPreqSuc(res.data));
            console.log(res.data);
        } catch (err) {
            dispatch(LPreqFail());
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <h2>Laptop</h2>
            {
                Data.map((e) => (
                    <div key={e.id}>
                        <h3>{e.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default Laptop;
