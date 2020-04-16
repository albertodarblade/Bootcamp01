
import actions from './actions'

export const initialState = {
  users: [],
  loading: false,
};

function updateState(state, action) {
  return { ...state, ...action.payload };
}

function addUser(state, action) {
  const newUsers = [...state.users];
  newUsers.push(action.payload.user);
  return { ...state, users: newUsers };
}

export default function globalReducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_STATE().type:
      return updateState(state, action);
    case actions.ADD_USER().type:
      return addUser(state, action);
    default:
      return state
  }
}