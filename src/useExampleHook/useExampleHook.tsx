import { useState } from 'react';

export default (value: any) => {
  const [state] = useState(value);
  return state;
};
