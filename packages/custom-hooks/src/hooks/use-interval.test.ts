import { act, renderHook } from '@testing-library/react-hooks/dom';

import { useInterval } from './use-interval';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('should use interval', () => {
  const callback = jest.fn();
  const delay = 100;
  const { result } = renderHook(() => useInterval(callback, delay));

  expect(result.current).toBeUndefined();

  act(() => {
    jest.advanceTimersByTime(50);
  });

  expect(callback).toBeCalledTimes(0);

  act(() => {
    jest.advanceTimersByTime(100);
  });

  expect(callback).toBeCalledTimes(1);
});
