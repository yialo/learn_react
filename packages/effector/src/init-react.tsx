import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/c_app';

export const initReact = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};
