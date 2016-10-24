import { compose, combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

const initialUsers = [
  { name: 'Dao', age: 26 },
  { name: 'Minh', age: 24 },
  { name: 'Hung', age: 32 },
  { name: 'Tien', age: 30 },
  { name: 'Tan', age: 4 },
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
