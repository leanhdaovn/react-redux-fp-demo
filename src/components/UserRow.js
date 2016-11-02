import React from 'react';

const sexName = (sex) => {
  switch (sex) {
    case 'M':
      return 'Male';
      break;
    case 'F':
      return 'Female';
      break;
    default:
      return 'Unidentified';
  }
};

export default ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age} years old</td>
      <td>{sexName(user.sex)}</td>
    </tr>
  );
};
