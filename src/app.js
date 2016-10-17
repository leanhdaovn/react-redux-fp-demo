import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './components/UserPage';
import { store } from './components/state'
import './app.scss';

const render = () => {
  // eslint-disable-next-line
  const ReloadedUserPage = require('./components/UserPage.js').default;
  ReactDOM.render(
    <ReloadedUserPage />,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();

if (module.hot) {
  module.hot.accept('./components/UserPage.js', () => {
    render();
  });
}
