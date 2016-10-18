import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {dispatch({
      type: 'UPDATE_SEARCH_STRING',
      searchString: e.target.value
    })}
  };
};

const FilterContainer = connect(null, mapDispatchToProps)(Filter);

export default FilterContainer;
