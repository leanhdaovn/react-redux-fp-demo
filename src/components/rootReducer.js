import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import { reducer as formReducer } from 'redux-form';

import { reducer as userFilterReducer } from './UserFilter/state';
import { reducer as suburbSelectReducer } from './SuburbSelect/state';
import { usersReducer, suburbsReducer } from './reducers';

export default combineReducers({
  userSearchString: userFilterReducer,
  suburbSearchString: suburbSelectReducer,
  users: usersReducer,
  suburbs: suburbsReducer,
  form: formReducer
});
