import React, {createContext , useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    countryData:[]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const handleClick = async (name) => {
        const URL = `https://restcountries.com/v3.1/name/${name}`;
        const data = await fetch(URL).then((res) => res.json());

        dispatch({
            type: 'FETCH_SUCCESS',
            payload : data
        })
    }

    return (<GlobalContext.Provider value = {{
        countryData: state.countryData,
        handleClick
    }}>
{children}
    </GlobalContext.Provider>)
}