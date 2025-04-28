import React from 'react'
import Customhooks from './CustomHooks/Customhooks'
export function Products3(){
    let url   = `http://localhost:3000/posts`
    const {data} = Customhooks(url);
    console.log(data);
    return(
        <>
    
        </>
    )
}