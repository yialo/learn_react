class App extends React.Component {
  render() {
    const el = React.createElement('div', null, 'Hello world!');

    console.log('---el', el);

    return el;
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(React.createElement(App, null), rootElement);
