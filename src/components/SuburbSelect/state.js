import { createAction, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

export const suburbSelector = (state) => state.suburb ? state.suburb.value : null;

const UPDATE_SEARCH_STRING = 'SuburbSelect/CHANGE_SUBURB'
const CLEAR_SEARCH_STRING = 'SuburbSelect/CLEAR_SUBURB'

export const changeSuburb = createAction(UPDATE_SEARCH_STRING);
export const clearSuburb = createAction(CLEAR_SEARCH_STRING);

const changeSuburbReducer = handleAction(changeSuburb, (state = '', action) => {
  return action && action.payload ? action.payload : state;
}, '');

const clearSuburbReducer = handleAction(clearSuburb, (state = '', action) => {
  console.log(state);
  return state;
}, '');

export const reducer = reduceReducers(
  changeSuburbReducer,
  clearSuburbReducer
);

export default reducer;
