import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { suburbSelector } from './state';

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
  if (input && input.length > 0) {
    setTimeout(function() {
      const filteredSuburbs = suburbs.filter(s => s.label.toLowerCase().indexOf(input) > -1);
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
    value: suburbSelector(state),
    loadOptions: loadOptions
  };
};

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
