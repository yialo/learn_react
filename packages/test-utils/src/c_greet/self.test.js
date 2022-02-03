import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Greet } from './self';

describe('Greet', () => {
  let $container = null;

  beforeEach(() => {
    $container = document.createElement('div');
    document.body.appendChild($container);
  });

  afterEach(() => {
    unmountComponentAtNode($container);
    $container.remove();
    $container = null;
  });

  it('should render greeting if name passed', () => {
    act(() => {
      render(<Greet name="Bob" />, $container);
    });

    expect($container.innerHTML).toBe('<h2>Hello, Bob</h2>');
    expect($container.textContent).toBe('Hello, Bob');
  });

  it('should render greeting if name omitted', () => {
    act(() => {
      render(<Greet />, $container);
    });

    expect($container.innerHTML).toBe('<p>Hey, stranger</p>');
    expect($container.textContent).toBe('Hey, stranger');
  });
});
