import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to every component within our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
