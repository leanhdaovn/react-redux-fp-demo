import React from 'react';
import UserRow from './UserRow';

export default ({ users }) => {
  return (
    <tbody>
      {users.map((user, index) => <UserRow user={user} key={index} />)}
    </tbody>
  );
};
