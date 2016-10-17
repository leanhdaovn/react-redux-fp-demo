import React from 'react';
import { store } from './state';

const changeFilter = (e) => {
  console.log(e);
  store.dispatch({
    type: 'UPDATE_SEARCH_STRING',
    searchString: e.target.value
  });
}

export default () => (
  <div>
    <label>User: </label>
    <input type="text" onChange={changeFilter}/>
  </div>
);
