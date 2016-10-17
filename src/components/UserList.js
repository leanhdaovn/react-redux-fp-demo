import React from 'react';
import UserRow from './UserRow';
import { store, filteredUsersSelector } from './state';

// const users = Store.getState().users;

export default () => {
  return (
    <tbody>
      {filteredUsersSelector(store.getState()).map((user, index) => <UserRow user={user} key={index} />)}
    </tbody>
  );
};
