import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { TimerCard } from './self';

describe('TimerCard', () => {
  let $container = null;

  beforeEach(() => {
    $container = document.createElement('div');
    document.body.appendChild($container);
    jest.useFakeTimers();
  });

  afterEach(() => {
    unmountComponentAtNode($container);
    $container.remove();
    $container = null;
    jest.useRealTimers();
  });

  it('should select null if time is out', () => {
    const handleSelect = jest.fn();

    act(() => {
      render(<TimerCard onSelect={handleSelect} />, $container);
    });
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(handleSelect).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  it('should accept selection', () => {
    const handleSelect = jest.fn();

    act(() => {
      render(<TimerCard onSelect={handleSelect} />, $container);
    });
    act(() => {
      $container
        .querySelector('[data-testid="2"]')
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(2);
  });

  it('should cleanup timer on early unmount', () => {
    const handleSelect = jest.fn();

    act(() => {
      render(<TimerCard onSelect={handleSelect} />, $container);
    });
    act(() => {
      jest.advanceTimersByTime(100);
    });
    act(() => {
      render(null, $container);
    });
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(handleSelect).not.toHaveBeenCalled();
  });
});
