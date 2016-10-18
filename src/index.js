import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './app.scss';

import { createStore } from 'redux';
import reducers from './components/reducers';

const store = createStore(reducers);

const render = () => {
  // eslint-disable-next-line
  const ReloadedApp = require('./components/App.js').default;
  ReactDOM.render(
    <ReloadedApp store={store}/>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    render();
  });
}
