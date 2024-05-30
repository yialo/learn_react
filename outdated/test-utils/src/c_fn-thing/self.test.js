import TestRenderer from 'react-test-renderer';

import { Thing, SubThing } from './self';

describe('Thing', () => {
  let testRenderer;

  TestRenderer.act(() => {
    testRenderer = TestRenderer.create(<Thing />);
  });

  const testInstance = testRenderer.root;

  it('should find by type and compare props', () => {
    expect(testInstance.findByType(SubThing).props.foo).toBe('bar');
  });

  it('should find instance with custom predicate', () => {
    const found = testInstance.find((instance) => {
      const key = instance._fiber.return.key;
      return key === 'cool';
    });

    expect(found.props.className).toBe('sub');
  });

  it('should find instance by type', () => {
    const found = testInstance.findByType(SubThing);
    expect(found.props.foo).toBe('bar');
  });
});
