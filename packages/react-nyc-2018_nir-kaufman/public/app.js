class App extends React.Component {
  render() {
    return React.createElement('div', null, 'Hello world!');
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(React.createElement(App, null), rootElement);
