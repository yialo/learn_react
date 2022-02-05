import { renderHook, act } from '@testing-library/react-hooks/server';

import { useServerCounter } from './use-server-counter';

test('should increment counter', () => {
  const { result, hydrate } = renderHook(() => useServerCounter());

  hydrate();

  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);

  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);
});
