import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { rt, rtf, rts } from './Redux/action';
function Pen() {
    const Data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const Fatchdata = async () => {
        dispatch(rt());
        try {
            const res = await axios.get('https://dummyjson.com/products')
            console.log(res.data.products);
            dispatch(rts(res.data.products));
        } catch (err) {
            dispatch(rtf());
            console.log(err);
        }
    }

    useEffect(() => {
        Fatchdata();
    }, [])
    return (
        <div>Pen Chart

            <div>
                {Data.map((e) => {
                    return (
                        <div>
                            <h3>{e.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pen