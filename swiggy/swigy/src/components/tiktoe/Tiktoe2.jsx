import React, { useRef, useState } from 'react'
import './Tiktoe2.css'


function Tiktoe2() {

    let[data,setData] = useState(["","","","","","","","",""])
    let[count, setCout] = useState(0)
    let[lock, setLock] = useState(false);
     let titleRef = useRef(null);

    const toggle = (num)=>{
        if(lock){
            return 0;
        }

        if(count%2===0){
             data[num] = "X";
             setCout(++count);
        }
        else{
             data[num] = "O";
             setCout(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        // Vertical checks
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        // Diagonal checks
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }
    

    const won = (winner)=>{
        setLock(true);
        if(winner === "X"){
            titleRef.current.innerHTML = "Congratulations X winner"
        }
        else{
            titleRef.current.innerHTML = "Congratulations O winner"
        }
    }


    const reset = () => {
        setLock(false);
        setData(["", "", "", "", "", "", "", "", ""]);
        titleRef.current.innerHTML = 'Tic Tac Toe in React';
    }

  return (
    <div className='container'>
  <h1 ref = {titleRef}>Tic Tac Game </h1>
<button onClick={()=> {reset()}}>Reset</button>
<div className='bord'>

<div className='row1'>
    <div className='boxes' onClick={(e)=> {toggle(0)} }>{data[0]}</div>
    <div className='boxes'onClick={(e)=> {toggle(1)} }>{data[1]}</div>
    <div className='boxes'onClick={(e)=> {toggle(2)} }>{data[2]}</div>
</div>

<div className='row2'>
    <div className='boxes'onClick={(e)=> {toggle(3)} }>{data[3]}</div>
    <div className='boxes' onClick={(e)=> {toggle(4)} }>{data[4]}</div>
    <div className='boxes' onClick={(e)=> {toggle(5)} }>{data[5]}</div>
</div>

<div className='row3'>
    <div className='boxes' onClick={(e)=> {toggle(6)} }>{data[6]}</div>
    <div className='boxes'onClick={(e)=> {toggle(7)} }>{data[7]}</div>
    <div className='boxes'onClick={(e)=> {toggle(8)} }>{data[8]}</div>
</div>
</div>
    </div>
  )
}

export default Tiktoe2