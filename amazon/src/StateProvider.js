// to avoid prop drilling - we use react context api
import React, { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//using inside component
export const useStateValue = () => useContext(StateContext);