
const filteredUsersSelector = (state) => state.users.filter(u => u.name.toLowerCase().indexOf(state.searchString) > -1);

export { filteredUsersSelector };

const obj = { filteredUsersSelector };

export default obj;
