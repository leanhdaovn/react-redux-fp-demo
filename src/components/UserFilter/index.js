import React from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import Filter from '../Filter';
import { updateSearchString, searchStringSelector } from './state';

const mapStateToProps = (state) => {
  return {
    value: searchStringSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChange: e => dispatch(updateSearchString(e.target.value))
});

const UserFilter = connect(null, mapDispatchToProps)(Filter);

export default UserFilter;
