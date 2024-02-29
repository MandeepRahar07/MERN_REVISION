import React, { useRef, useState } from 'react';
import './Ticktoe.css';


function Ticktoe() {
  let titleRef = useRef(null);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const toggle = (id) => {
    if (lock) {
      return 0;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      newData[id] = "X";
      setCount(count + 1);
    } else {
      newData[id] = "O";
      setCount(count + 1);
    }
    setData(newData);
    checkWin();
  };

  const checkWin = () => {
    if (
      (data[0] === data[1] && data[1] === data[2] && data[2] !== "") ||
      (data[3] === data[4] && data[4] === data[5] && data[5] !== "") ||
      (data[6] === data[7] && data[7] === data[8] && data[8] !== "") ||
      (data[0] === data[3] && data[3] === data[6] && data[6] !== "") ||
      (data[1] === data[4] && data[4] === data[7] && data[7] !== "") ||
      (data[2] === data[5] && data[5] === data[8] && data[8] !== "") ||
      (data[0] === data[4] && data[4] === data[8] && data[8] !== "") ||
      (data[2] === data[4] && data[4] === data[6] && data[6] !== "")
    ) {
      won(data[count % 2]);
    }
  };
  

  const won = (winner) => {
    setLock(true);
    if (winner === "X") {
      titleRef.current.innerHTML = "Congratulations X winner";
    } else {
      titleRef.current.innerHTML = "Congratulations O winner";
    }
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    titleRef.current.innerHTML = 'Tic Tac Toe in React';
  };

  return (
    <div>
      <h1 ref={titleRef}>Tik Tak Toe Game</h1>

      <div className='container'>
        <div className='row1'>
          <div className='boxes' onClick={(e) => { toggle(0) }}>{data[0]}</div>
          <div className='boxes' onClick={(e) => { toggle(1) }}>{data[1]}</div>
          <div className='boxes' onClick={(e) => { toggle(2) }}>{data[2]}</div>
        </div>
        <div className='row2'>
          <div className='boxes' onClick={(e) => { toggle(3) }}>{data[3]}</div>
          <div className='boxes' onClick={(e) => { toggle(4) }}>{data[4]}</div>
          <div className='boxes' onClick={(e) => { toggle(5) }}>{data[5]}</div>
        </div>
        <div className='row3'>
          <div className='boxes' onClick={(e) => { toggle(6) }}>{data[6]}</div>
          <div className='boxes' onClick={(e) => { toggle(7) }}>{data[7]}</div>
          <div className='boxes' onClick={(e) => { toggle(8) }}>{data[8]}</div>
        </div>
      </div>
    </div>
  );
}

export default Ticktoe;
