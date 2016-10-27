import { createAction, handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';
import { get } from 'lodash/fp'

export const suburbSelector = get('suburb.value');

const CHANGE_SUBURB = 'SuburbSelect/CHANGE_SUBURB';

export const changeSuburb = createAction(CHANGE_SUBURB);

export const changeSuburbReducer = handleAction(changeSuburb, (state, action) => {
  return action && action.payload ? action.payload : state;
}, null);

export default changeSuburbReducer;
