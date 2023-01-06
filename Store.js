import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    fav: {favItems: []}
}

function reducer(state, action) {
    
}