import { useContext } from 'react';
import { ExampleContext } from '../ExampleContextProvider/ExampleContextProvider';

export default () => {
  const context = useContext(ExampleContext);
  return context;
};
