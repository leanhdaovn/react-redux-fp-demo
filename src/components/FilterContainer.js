import React from 'react';
import Filter from './Filter';
import { store } from './state';

const changeFilter = (e) => {
  console.log(e);
  store.dispatch({
    type: 'UPDATE_SEARCH_STRING',
    searchString: e.target.value
  });
}

export default () => (
  <Filter onChange={changeFilter}/>
);
