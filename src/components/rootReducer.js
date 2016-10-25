import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { reducer as formReducer } from 'redux-form';

import { reducer as userFilterReducer } from './UserFilter/state';
import { changeSuburbReducer } from './SuburbSelect/state';
import { usersReducer, suburbsReducer } from './reducers';

export default combineReducers({
  userSearchString: userFilterReducer,
  users: usersReducer,
  suburbs: suburbsReducer,
  form: formReducer,
  suburb: changeSuburbReducer,
});
