import * as React from 'react';

export function useServerCounter() {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}
