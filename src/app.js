import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './components/UserPage';
import './app.scss';

const users = [
  { name: 'Dao', age: 26 },
  { name: 'Minh', age: 24 },
  { name: 'Hung', age: 32 },
  { name: 'Tien', age: 30 },
  { name: 'Tan', age: 4 },
];

ReactDOM.render(
  <UserPage users={users} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/UserPage.js', () => {
    // eslint-disable-next-line
    const ReloadedUserPage = require('./components/UserPage.js').default;
    ReactDOM.render(
      <ReloadedUserPage users={users} />,
      document.getElementById('root')
    );
  });
}
