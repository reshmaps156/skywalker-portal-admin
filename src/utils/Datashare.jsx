import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const viewMessageContext = createContext({})
export const userRequestContext = createContext({})
function Datashare({ children }) {
    const [viewMessage, setViewMessage] = useState({})
    const [userRequest,setUserRequest] = useState([])

    return (

       <userRequestContext.Provider value={{userRequest,setUserRequest}}>
            <viewMessageContext.Provider value={{ viewMessage, setViewMessage }}>
                {children}
            </viewMessageContext.Provider>
       </userRequestContext.Provider>

    )
}

export default Datashare