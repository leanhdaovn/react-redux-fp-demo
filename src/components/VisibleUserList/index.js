import React from 'react';
import { connect } from 'react-redux';
import UserList from '../UserList';
import { filteredUsersSelector } from './state';

const mapStateToProps = (state) => {
  return {
    users: filteredUsersSelector(state)
  };
};

const VisibleUserList = connect(
  mapStateToProps,
  null
)(UserList);

export default VisibleUserList;
