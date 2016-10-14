import React from 'react';

export default ({ userSearchText, onChange }) => (
  <div>
    <label>User: </label>
    <input type="text" onChange={onChange}/>
  </div>
);
