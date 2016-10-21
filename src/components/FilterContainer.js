import React from 'react';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';
import Filter from './Filter';

const updateSearchString = createAction('UPDATE_SEARCH_STRING');

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: e => dispatch(updateSearchString(e.target.value))
  };
};

const FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer;
