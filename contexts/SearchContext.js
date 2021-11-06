import React from 'react';

const SearchContext = React.createContext(); // create context
// create context provider

const SearchContextProvider = ({children})=>{
    const [search ,setSearch]= React.useState("")
    return (
        <SearchContext.Provider 
        value={{search ,setSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export {
    SearchContext,
    SearchContextProvider

}