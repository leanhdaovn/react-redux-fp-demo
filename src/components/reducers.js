
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

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_SEARCH_STRING') {
    return { ...state, searchString: action.searchString };
  }
  if (action.type === 'CHANGE_SUBURB') {
    return { ...state, suburb: action.suburb };
  }
  return state;
}

export default reducer;
