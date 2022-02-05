import * as React from 'react';

const CounterStepContext = React.createContext(1);

type ProviderProps = {
  step: number;
};

export const CounterStepProvider: React.FC<ProviderProps> = ({ step, children }) => {
  return <CounterStepContext.Provider value={step}>{children}</CounterStepContext.Provider>;
};

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = React.useState(initialCount);
  const step = React.useContext(CounterStepContext);

  const increment = React.useCallback(() => {
    setCount((x) => x + step);
  }, [step]);

  const reset = React.useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  return { count, increment, reset };
};
