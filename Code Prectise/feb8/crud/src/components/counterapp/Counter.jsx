import React, { useState } from 'react'

function Counter() {
    const[count, setCount] = useState(0)
   
  return (
    <div style={{marginTop : "50px", textAlign : "center"}}>counter
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>increase</button>
        <br />
        <br />
        <button onClick={()=> setCount(count - 1)}>Dicrease</button>
    </div>
  )
}

export default Counter