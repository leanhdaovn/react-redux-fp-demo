import { compose } from 'redux';
import { handleAction } from 'redux-actions';
import reduceReducers from 'reduce-reducers';

const initialUsers = [
  { name: 'Dao', age: 26 },
  { name: 'Minh', age: 24 },
  { name: 'Hung', age: 32 },
  { name: 'Tien', age: 30 },
  { name: 'Tan', age: 4 },
];

const initialState = {
  users: initialUsers,
  searchString: '',
  suburbs: [],
  suburbSearchString: ''
};

const basicReducer = (state = initialState, action) => state;

const changeSuburbReducer = handleAction('CHANGE_SUBURB', (state, action) => {
  return { ...state, suburb: action.payload };
});

const updateSearchStringReducer = handleAction('UPDATE_SEARCH_STRING', (state, action) => {
  return { ...state, searchString: action.payload };
});

const reducer = reduceReducers(
  basicReducer,
  changeSuburbReducer,
  updateSearchStringReducer
);

export default reducer;
