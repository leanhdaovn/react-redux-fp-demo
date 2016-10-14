import React from 'react';
import UserList from './UserList';

export default ({ users }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <UserList users={users} />
  </table>
);
