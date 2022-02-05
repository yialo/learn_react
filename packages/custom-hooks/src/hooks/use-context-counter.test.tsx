import { act, renderHook } from '@testing-library/react-hooks/dom';

import { CounterStepProvider, useCounter } from './use-context-counter';

test('should use counter', () => {
  const initialStep = 2;
  const wrapper: React.FC = ({ children }) => (
    <CounterStepProvider step={initialStep}>{children}</CounterStepProvider>
  );

  const { result } = renderHook(() => useCounter(), {
    wrapper,
  });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
});
