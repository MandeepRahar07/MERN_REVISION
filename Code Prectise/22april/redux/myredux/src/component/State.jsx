import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetDl, GetDlFail, GetDlSuc, Getfail, Getreq, Getsuc } from './redux/action';
import axios from 'axios';

function CountryList() {
    const country = useSelector((state) => state.data);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            dispatch(Getreq());
            const res = await axios.get('http://localhost:8008/data');
            dispatch(Getsuc(res.data));
        } catch (err) {
            dispatch(Getfail());
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const HandleDelete = async (id) => {
        console.log("Deleting ID:", id); // 👀 check this
        try {
            dispatch(GetDl());
            await axios.delete(`http://localhost:8008/data/${id}`);
            dispatch(GetDlSuc());
            fetchData();
        } catch (err) {
            dispatch(GetDlFail());
            console.log(err);
        }
    };


    return (
        <div>
            <h2>Countries</h2>
            <div>
                {country.map((e) => (
                    <div key={e.id}>
                        <h3>{e.name}</h3>
                        <button onClick={() => HandleDelete(e.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountryList;
