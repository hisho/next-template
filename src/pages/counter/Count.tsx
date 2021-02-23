import React, { useContext } from 'react';
import { CounterContext } from '@src/pages/counter/index';

export const Count = () => {
  const { state } = useContext(CounterContext);
  return <div className="text-center">{state}</div>;
};
