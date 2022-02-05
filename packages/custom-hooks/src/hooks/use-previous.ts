import * as React from 'react';

export const usePrevious = (value: any) => {
  const ref_previous = React.useRef();

  React.useEffect(() => {
    ref_previous.current = value;
  }, [value]);

  return ref_previous.current;
};
