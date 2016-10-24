export const filteredUsersSelector = (state = []) => {
  if (state && state.users){
    return state.users
            .filter(u => u.name.toLowerCase()
            .indexOf(state.userSearchString) > -1);
  } else {
    return [];
  }
};
