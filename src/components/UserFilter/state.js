import { createAction, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const UPDATE_SEARCH_STRING = 'UserFilter/UPDATE_SEARCH_STRING'
const CLEAR_SEARCH_STRING = 'UserFilter/CLEAR_SEARCH_STRING'

export const updateSearchString = createAction(UPDATE_SEARCH_STRING);
export const clearSearchString = createAction(CLEAR_SEARCH_STRING);

const updateSearchStringReducer = handleAction(updateSearchString, (state = '', action) => {
  const result = action && typeof action.payload !== 'undefined' ? action.payload : state;
  return result;
}, '');

const clearSearchStringReducer = handleAction(clearSearchString, (state = '', action) => {
  return '';
}, '');

export const reducer = reduceReducers(
  updateSearchStringReducer,
  clearSearchStringReducer
);

export default reducer;
