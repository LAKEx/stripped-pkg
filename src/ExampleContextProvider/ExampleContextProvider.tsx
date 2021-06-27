import React, { createContext } from 'react';

export const ExampleContext = createContext<any>(null);

interface ExampelContextProviderProps {
  children: any;
  value: any;
}

export default ({ children, value }: ExampelContextProviderProps) => {
  return (
    <ExampleContext.Provider value={value}>{children}</ExampleContext.Provider>
  );
};
