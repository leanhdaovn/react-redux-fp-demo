import React from 'react';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import Select from 'react-select';

const filteredSuburbSelector = (state) => state.suburbs.filter(s => s.label.toLowerCase().indexOf(state.suburbSearchString) > -1);
const suburbSelector = (state) => state.suburb ? state.suburb.value : null;

const suburbs = [
    { value: 0, label: 'Ho Chi Minh' },
    { value: 1, label: 'Ha Noi' },
    { value: 2, label: 'Hai Phong' },
    { value: 3, label: 'Can Tho' },
    { value: 4, label: 'Da Nang' },
    { value: 5, label: 'Hue' },
    { value: 6, label: 'Binh Duong' },
];


const loadOptions = (input, callback) => {
  // console.log('load options');
  if (input && input.length > 0) {
    setTimeout(function() {
      // console.log('before filter', input);
      const filteredSuburbs = suburbs.filter(s => s.label.toLowerCase().indexOf(input) > -1);
      // console.log('after filter', filteredSuburbs);
      callback(null, {
        options: filteredSuburbs,
        // CAREFUL! Only set this to true when there are no more options,
        // or more specific queries will not be sent to the server.
        complete: true
      });
    }, 500);
  }
};

const mapStateToProps = (state) => {
  return {
    // options: filteredSuburbSelector(state),
    value: suburbSelector(state),
    loadOptions: loadOptions
  };
};

const changeSuburb = createAction('CHANGE_SUBURB');

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (suburb) => dispatch(changeSuburb(suburb))
  };
};

const SuburbSelect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Select.Async);

export default SuburbSelect;
