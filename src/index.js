import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './components/rootReducer';
import './app.scss';
import 'react-select/dist/react-select.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
