import React from 'react';
import { Provider } from 'react-redux';
import UserPage from './UserPage';


const App = ({ store }) => (
  <Provider store={store}>
    <UserPage />
  </Provider>
);

export default App;
