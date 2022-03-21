'use strict';

const Title = (props) => {
  console.log('Title props', props);
  return React.createElement('h1', null, props.name);
};

class App extends React.Component {
  state = { title: 'Hello world!' };

  render() {
    const el = React.createElement(Title, { title: this.state.title });
    console.log('App el', el);

    return el;
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(React.createElement(App, null), rootElement);
