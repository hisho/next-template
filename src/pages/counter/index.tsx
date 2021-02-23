import React, {createContext,useReducer} from "react";
import {Count} from "@src/pages/counter/Count";
import {Decrement} from "@src/pages/counter/Decrement";

const initialState = 0;

type actionType = 'increment' | 'decrement' | 'reset';
export const CounterContext = createContext({} as {
  state: number
  dispatch: (newState: actionType) => void
});

const reducerFunc = (countState: number, action: actionType) => {
  switch (action) {
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <CounterContext.Provider value={{state,dispatch}}>
      <div className="mx-auto max-w-xl px-5 pt-32 md:pt-64">
        <Count />
        <div className="flex justify-between">
          <Decrement/>
          <button onClick={() => dispatch('reset')} className="border border-solid border-green-400 rounded bg-red-600 px-3 py-2 text-white font-bold hover:bg-red-700 focus:bg-red-700" type="button">x</button>
          <button onClick={() => dispatch('increment')} className="border border-solid border-green-400 rounded bg-green-600 px-3 py-2 text-white font-bold hover:bg-green-700 focus:bg-green-700" type="button">+</button>
        </div>
      </div>
    </CounterContext.Provider>
  )
}

export default CounterPage;
