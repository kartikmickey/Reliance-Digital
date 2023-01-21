
import React, { useState ,createContext } from 'react'


export const Context = createContext()

const ContextProvider = ({children}) => {

    const [search , setSearch] = useState("")
    const [cart, setCart] = useState([])
  return (
   <Context.Provider value={{search, setSearch , cart, setCart }} >
    {children}
   </Context.Provider>
  )
}

export default ContextProvider