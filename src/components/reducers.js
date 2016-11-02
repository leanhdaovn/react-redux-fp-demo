import { compose, combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const initialUsers = [
  { name: 'Dao', age: 26, sex: 'M' },
  { name: 'Minh', age: 24, sex: 'F' },
  { name: 'Hung', age: 32, sex: 'M' },
  { name: 'Tien', age: 30, sex: 'M' },
  { name: 'Yen', age: 23, sex: 'F' },
  { name: 'Don', age: 27, sex: 'F' },
  { name: 'Dung', age: 34, sex: 'M' },
  { name: 'Thu', age: 28, sex: 'F' },
];

export const usersReducer = (state = initialUsers, action) => {
  return state;
};

export const suburbsReducer = (state = [], action) => {
  return state;
};

export default {
  usersReducer,
  suburbsReducer
};
