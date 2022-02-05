import * as React from 'react';

export class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.input = null;
  }
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return <input type="text" ref={(el) => (this.input = el)} />;
  }
}
