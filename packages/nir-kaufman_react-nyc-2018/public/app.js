'use strict';

class App extends React.Component {
  state = { title: 'Hello world!' };
  titleRef = React.createRef();

  componentDidMount() {
    console.log('this.titleRef', this.titleRef);
  }

  changeTitle() {
    this.updater.enqueueSetState(this, { title: 'Hello world!' });
    console.log('this.state', this.state);
  }

  render() {
    const el = React.createElement(
      'h1',
      null,
      React.createElement('span', null, this.state.title),
      React.createElement(
        'button',
        {
          onClick: () => {
            this.changeTitle();
          },
        },
        'click',
      ),
    );

    console.log('App element', el);

    return el;
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(React.createElement(App, null), rootElement);
