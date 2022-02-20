import { useState, useEffect, useReducer, createContext } from "react";
import { document } from "./reducers/document";
import {app} from "./reducers/app";

// initial state
const initialState = {
  saveDocument: false,
  status: 'Ожидание...'
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(document, app), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };