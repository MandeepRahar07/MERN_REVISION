import React, { useState } from 'react'

function Comment({comment}) {
const[input, setInput]= useState("");

const onaddComment = ()=>{

}
  return (
    <div>Comment
    <div className={comment.id}>
        <>
        
        <div>
            <input 
            className='InputContainer'
            type="text"
            onChange={(e)=> setInput(e.target.change)}
            onFocus
            value={input}
            placeholder='type...'
            />
        </div>
          <div className='reply comment' onClick={onaddComment}>
            
          </div>



            </>
      </div>
        <div>
         
        </div>
    </div>
  )
}

export default Comment