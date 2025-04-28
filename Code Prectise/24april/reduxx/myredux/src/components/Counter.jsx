import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CountReqsuc } from '../redux/action';

function Counter() {
    const Countdata = useSelector(state => state.count);
    const distpatch = useDispatch();
    const handleIncrease = ()=>{
        distpatch(CountReqsuc(1))
    }
 const handleDicrease = ()=>{
    distpatch(CountReqsuc(-1));
 }
    return (
        <div>Counter
            <h1>
                {Countdata}
            </h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDicrease}>Dicrese</button>
        </div>
    )
}

export default Counter