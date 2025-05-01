import React, { useState } from 'react'
import th from './Theme.module.css'
function Theme() {
    const[theme, setTheme] = useState('light')
 
    const Handletheme = ()=>{
        if(theme == 'light'){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }


  return (
    <div className={th[`Mainbox-${theme}`]}>
        <div className={th.heading}>
            <h1>
            Theme Change App
            </h1>
        </div>
        <button onClick={()=> Handletheme()}>{theme == 'light' ? "Dark" : 'Light'}</button>
        <div>
            <h3>hallo man How are you</h3>
            <h5>I am fine and you</h5>
        </div>
    </div>
  )
}

export default Theme