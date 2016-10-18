
const initialUsers = [
  { name: 'Dao', age: 26 },
  { name: 'Minh', age: 24 },
  { name: 'Hung', age: 32 },
  { name: 'Tien', age: 30 },
  { name: 'Tan', age: 4 },
];

const reducer = (state = {users: initialUsers, searchString: ''}, action) => {
  if (action.type === 'UPDATE_SEARCH_STRING') {
    return { ...state, searchString: action.searchString };
  }
  return state;
}

export default reducer;
