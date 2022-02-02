import * as React from 'react';
import { render } from 'react-dom';
import {
  act,
  isElement,
  isElementOfType,
  isDOMComponent,
  isCompositeComponentWithType,
} from 'react-dom/test-utils';

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

  it('should show that rendered counter element is of Counter type', () => {
    let counterElement = null;

    act(() => {
      counterElement = <Counter />;
    });

    expect(isElementOfType(counterElement, Counter)).toBe(true);
  });

  it('should show that native div is DOMComponent', () => {
    const $div = document.createElement('div');
    expect(isDOMComponent($div)).toBe(true);
  });

  it('should show that native div is not a React element', () => {
    const $div = document.createElement('div');
    expect(isElement($div)).toBe(false);
  });

  it('should show that ref attached to button contains DOMComponent', () => {
    const buttonRef = { current: null };
    act(() => {
      render(<button ref={buttonRef} />, $container);
    });

    expect(isDOMComponent(buttonRef.current)).toBe(true);
  });

  it('should show that ref attached to Counter contains CompositeComponent of Counter type', () => {
    const counterRef = { current: null };
    act(() => {
      render(<Counter ref={counterRef} />, $container);
    });
    expect(isCompositeComponentWithType(counterRef.current, Counter)).toBe(true);
  });
});
