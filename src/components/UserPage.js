import React from 'react';
import Filter from './Filter';
import UserTable from './UserTable';

export default ({ users }) => (
  <div>
    <Filter />
    <UserTable users={users} />
  </div>
);
