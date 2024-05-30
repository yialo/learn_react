import * as React from 'react';

export const useInterval = (callback: (...args: any[]) => any, delay: number) => {
  const ref_savedCallback = React.useRef(callback);

  React.useEffect(() => {
    ref_savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      ref_savedCallback.current();
    }, delay);

    return () => {
      clearInterval(timer);
    }
  }, [delay]);
};
