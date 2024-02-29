import React, { useState } from 'react'
import Comment from './Comment';


const comments = {
    id : 1,
    item : [
        {
            id: 22222222222,
            name : "hello",
            item:[
                {
                    id:33333333,
                    name: "manddep",
                    item : [
                    ]
                }
            ]
        }
    ]
}
function App2() {

    const [commentsData, setCommentData] = useState(comments);

  return (
    <div>
        <div>
            <Comment comment = {commentsData}/>
        </div>
    </div>
  )
}

export default App2