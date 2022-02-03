import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { User } from './self';

describe('User', () => {
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

  it('should render user data', async () => {
    const userMock = {
      name: 'Bob',
      age: 34,
      address: 'Orenburg',
    };

    const fakeFetch = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(userMock),
      }),
    );

    await act(async () => {
      render(<User id={234} />, $container);
    });

    expect(fakeFetch).toHaveBeenCalledTimes(1);
    expect($container.querySelector('summary').textContent).toBe('Bob');
    expect($container.querySelector('strong').textContent).toBe('34');
    expect($container.textContent).toContain('Orenburg');

    fakeFetch.mockRestore();
  });
});
