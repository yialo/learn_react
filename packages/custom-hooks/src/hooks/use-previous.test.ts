import { renderHook } from '@testing-library/react-hooks/dom';

import { usePrevious } from './use-previous';

test('should return undefined on 1st render', () => {
  const { result } = renderHook(() => usePrevious(1));
  expect(result.current).toBeUndefined();
});

test('should use previous with primitive', () => {
  // 1st render
  const { rerender, result } = renderHook((value) => usePrevious(value), {
    initialProps: 1,
  });

  // 2nd render, returns value from 1st render
  rerender(0);
  expect(result.current).toBe(1);

  // 3rd render, returns value from 2st render
  rerender(0);
  expect(result.current).toBe(0);

  // 4th render, returns value from 3rd render
  rerender(2);
  expect(result.current).toBe(0);
});

type TValue = { [key: string]: any };
type TReturn = TValue | undefined;

test('should use previous with object', () => {
  const value1 = { a: 1 };
  // 1st render
  const { rerender, result } = renderHook<TValue, TReturn>(({ value }) => usePrevious(value), {
    initialProps: { value: value1 },
  });

  const value2 = { b: 2 };
  // 2nd render, returns value from 1st render
  rerender({ value: value2 });
  expect(result.current).toBe(value1);

  // 3rd render, returns value from 2st render
  rerender({ value: value2 });
  expect(result.current).toBe(value2);

  const value3 = { c: 3 };
  // 4th render, returns value from 3rd render
  rerender({ value: value3 });
  expect(result.current).toBe(value2);
});
