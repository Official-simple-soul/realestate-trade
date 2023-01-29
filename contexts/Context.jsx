import React, { useContext, useState } from 'react'



const RestContext = React.createContext()

const RestProvider = ({children}) => {
    const [sideValue, setSideValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [favArr, setFavArr] = useState([]);
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
      })
    return <RestContext.Provider value={{sideValue, setSideValue, searchValue, setSearchValue, loginDetails, setLoginDetails, favArr, setFavArr}}>
                {children}
            </RestContext.Provider>
}

const useGlobalContext = () => {
    return useContext(RestContext)
}

export {useGlobalContext, RestProvider}