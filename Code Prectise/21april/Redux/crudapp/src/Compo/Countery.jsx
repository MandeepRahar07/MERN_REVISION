import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getfail,getreqsuccess,getrequest } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
function Countery() {
    // const [country, setCountry] = useState([]);
const country = useSelector((state)=> state.data);

const Dispatch = useDispatch();


    const FetchData = async () => {
        Dispatch(getrequest());
        try {
            const res = await axios.get("http://localhost:8000/data");
            const data = res.data;
            console.log(data);
            Dispatch(getreqsuccess(data));
            // setCountry(data);
        } catch (err) {
            Dispatch(getfail);
            console.log(err);
        }
    }

    useEffect(() => {
        FetchData();
    }, []);


    

    return (
        <div>Countery Name and Details form the world

            <div>
                {
                    country.map((e) => {
                        return (
                            <div key={e.id}>
                                <h1>{e.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Countery