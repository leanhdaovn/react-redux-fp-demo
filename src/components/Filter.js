import React, { PropTypes } from 'react';

const Filter = ({ onChange }) => (
  <div>
    <label>User: </label>
    <input type="text" onChange={onChange}/>
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Filter;
