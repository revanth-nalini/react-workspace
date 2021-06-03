import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();    // preparing data layer

export const StateProvider = ({reducer, initialState, children}) => (    // higher order component
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); // pull info from data layer