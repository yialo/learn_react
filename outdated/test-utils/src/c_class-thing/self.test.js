import TestRenderer from 'react-test-renderer';

import { Thing } from './self';

describe('Thing', () => {
  it('should autofocus input on mount', () => {
    let isFocused = false;

    TestRenderer.act(() => {
      TestRenderer.create(<Thing />, {
        createNodeMock: (node) => {
          if (node.type === 'input') {
            return {
              focus: () => {
                isFocused = true;
              },
            };
          }

          return null;
        },
      });
    });

    expect(isFocused).toBe(true);
  });
});
