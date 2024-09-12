import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const viewMessageContext = createContext({})
function Datashare({ children }) {
    const [viewMessage, setViewMessage] = useState({})
    
    return (
     
            <viewMessageContext.Provider value={{ viewMessage, setViewMessage }}>
                {children}
            </viewMessageContext.Provider>
      
    )
}

export default Datashare