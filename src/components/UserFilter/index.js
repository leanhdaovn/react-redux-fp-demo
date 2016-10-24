import React from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import Filter from '../Filter';
import { updateSearchString } from './state';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: e => dispatch(updateSearchString(e.target.value))
  };
};

const UserFilter = connect(null, mapDispatchToProps)(Filter);

export default UserFilter;
