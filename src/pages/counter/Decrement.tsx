import React, {useEffect, useContext} from "react";
import {CounterContext} from "@src/pages/counter/index";

export const Decrement = () => {
  const {state, dispatch} = useContext(CounterContext);

  useEffect(() => {
    console.log('render');
  }, [state])

  return (
    <button
      onClick={() => dispatch('decrement')}
      className="border border-solid border-green-400 rounded bg-green-600 px-3 py-2 text-white font-bold hover:bg-green-700 focus:bg-green-700"
      type="button"
    >
      -
    </button>
  )
}
