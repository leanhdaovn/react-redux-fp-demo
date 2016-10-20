import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './components/reducers';
import './app.scss';
import 'react-select/dist/react-select.css';

const store = createStore(reducers);

const render = () => {
  // eslint-disable-next-line
  const App = require('./components/App.js').default;
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

render();

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    render();
  });
}
