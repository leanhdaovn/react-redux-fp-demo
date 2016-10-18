import React from 'react';
import UserRow from './UserRow';
import UserList from './UserList';
import { store, filteredUsersSelector } from './state';

// const users = Store.getState().users;

export default () => {
  return (
    <UserList users={filteredUsersSelector(store.getState())} />
  );
};
