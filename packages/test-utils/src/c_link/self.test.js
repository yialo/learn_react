import renderer from 'react-test-renderer';

import { Link } from './self';

describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Link href="https://github.com/">GitHub</Link>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an anchor when no href is passed', () => {
    const tree = renderer.create(<Link>GitHub</Link>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('updates CSS class on hover', () => {
    const component = renderer.create(<Link href="https://github.com/">GitHub</Link>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      tree.props.onMouseEnter();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      tree.props.onMouseLeave();
    });

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
