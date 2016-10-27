import { flow, get, toLower, invokeArgs, gt, getOr, filter, constant, identity } from 'lodash/fp';

const branch = (test, left, right) => (...params) => test(...params) ? left(...params) : right(...params);

const printLog = args => {
  console.log(args);
  return args;
};

const getLowerCaseName = flow(get('name'), toLower);
const include = str => flow(invokeArgs('indexOf', [str]), x => x > -1);

const hasString = string => filter(flow(
  getLowerCaseName,
  include(string)
));

const getUsers = getOr([], 'users');
const getSearchString = getOr('', 'userSearchString');

export const filteredUsersSelector = (state = []) => {
  const searchString = getSearchString(state);
  return flow(
    getUsers,
    branch(
      constant(searchString),
      hasString(searchString),
      identity
    )
  )(state);
};
