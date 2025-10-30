import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CounterContext = createContext();

const initialState = {
  count: 0,
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1]
      };
    case 'decrement':
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1]
      };
    case 'reset':
      return {
        count: 0,
        history: [...state.history, 0]
      };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem('counterState');
    return stored ? JSON.parse(stored) : initialState;
  });

  
  useEffect(() => {
    localStorage.setItem('counterState', JSON.stringify(state));
  }, [state]);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
