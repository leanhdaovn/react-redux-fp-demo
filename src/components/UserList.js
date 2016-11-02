import React, { PropTypes } from 'react';
import UserRow from './UserRow';

const UserList = ({ users }) => {
  return (
    <tbody>
      {users.map((user, index) => <UserRow user={user} key={index} />)}
    </tbody>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default UserList;
