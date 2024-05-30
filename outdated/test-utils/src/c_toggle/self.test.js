import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Toggle } from './self';

describe('Toggle', () => {
  let $container = null;

  beforeEach(() => {
    $container = document.createElement('div');
    document.body.appendChild($container);
  });

  afterEach(() => {
    unmountComponentAtNode($container);
    document.body.removeChild($container);
    $container = null;
  });

  it('should reflect button label changes on click', () => {
    const handleChange = jest.fn();

    act(() => {
      render(<Toggle onChange={handleChange} />, $container);
    });

    const $button = $container.querySelector('[data-testid="toggle"]');
    expect($button.textContent).toBe('Turn off');

    act(() => {
      $button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect($button.textContent).toBe('Turn on');

    act(() => {
      for (let i = 1; i <= 5; i++) {
        $button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });

    expect(handleChange).toHaveBeenCalledTimes(6);
    expect($button.textContent).toBe('Turn off');
  });
});
