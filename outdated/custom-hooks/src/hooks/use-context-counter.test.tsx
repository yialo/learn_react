import { act, renderHook } from '@testing-library/react-hooks';

import { CounterStepProvider, useCounter } from './use-context-counter';

test('should use counter', async () => {
  const wrapper: React.FC<{ step: number }> = ({ children, step }) => (
    <CounterStepProvider step={step}>{children}</CounterStepProvider>
  );
  const { rerender, result, waitForNextUpdate, waitForValueToChange } = renderHook(
    () => useCounter(),
    {
      wrapper,
      initialProps: {
        step: 2,
      },
    },
  );

  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);

  rerender({ step: 7 });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(9);

  rerender({ step: 1 });
  result.current.incrementAsync();
  await waitForNextUpdate();
  expect(result.current.count).toBe(10);

  rerender({ step: 2 });
  result.current.incrementAsync();
  await waitForValueToChange(() => result.current.count);
  expect(result.current.count).toBe(12);
});
