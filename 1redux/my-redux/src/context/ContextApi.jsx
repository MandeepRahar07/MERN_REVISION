import React, { createContext, useState } from 'react'

export const ThemeApp = createContext();

function ContextApi({children}) {

    const[theme, setTheme] = useState("light");
    
     const toggleTheme = ()=>{
       setTheme(()=> (  theme === 'light' ? "dark" : "light" ));       
     }

     return (
    <div>
        <ThemeApp.Provider value={{theme, toggleTheme}}>{children}</ThemeApp.Provider>
    </div>
  )
}

export default ContextApi