import React from 'react';

export default ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age} years old</td>
    </tr>
  );
};
