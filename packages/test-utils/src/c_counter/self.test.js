import * as React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Counter } from './self';

describe('Counter', () => {
  let $container = null;

  beforeEach(() => {
    $container = document.createElement('div');
    document.body.appendChild($container);
  });

  afterEach(() => {
    document.body.removeChild($container);
    $container = null;
  });

  it('should render and update counter', () => {
    act(() => {
      render(<Counter />, $container);
    });

    const $paragraph = document.querySelector('p');
    expect($paragraph.textContent).toBe('You clicked 0 times');

    const $button = document.querySelector('button');
    act(() => {
      $button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect($paragraph.textContent).toBe('You clicked 1 times');
  });
});
