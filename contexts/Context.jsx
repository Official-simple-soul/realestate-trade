import React, { useContext, useState } from 'react'



const RestContext = React.createContext()

const RestProvider = ({children}) => {
    const [sideValue, setSideValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    return <RestContext.Provider value={{sideValue, setSideValue, searchValue, setSearchValue}}>
                {children}
            </RestContext.Provider>
}

const useGlobalContext = () => {
    return useContext(RestContext)
}

export {useGlobalContext, RestProvider}