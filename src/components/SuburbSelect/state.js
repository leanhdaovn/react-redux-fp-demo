import { createAction, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

export const suburbSelector = (state) => state.suburb ? state.suburb.value : null;

const CHANGE_SUBURB = 'SuburbSelect/CHANGE_SUBURB';
// const CLEAR_SEARCH_STRING = 'SuburbSelect/CLEAR_SUBURB'

export const changeSuburb = createAction(CHANGE_SUBURB);
// export const clearSuburbSearchString = createAction(CLEAR_SEARCH_STRING);

export const changeSuburbReducer = handleAction(changeSuburb, (state, action) => {
  console.log(state, action);
  return action && action.payload ? action.payload : state;
}, null);

// const clearSuburbSearchStringReducer = handleAction(clearSuburbSearchString, (state = '', action) => {
//   console.log(state);
//   return state;
// }, '');

// export const reducer = reduceReducers(
//   changeSuburbSearchStringReducer,
//   clearSuburbSearchStringReducer
// );

export default changeSuburbReducer;
