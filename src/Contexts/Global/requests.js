import userRest from '../../Rest/Users'

export default function requests(state, dispatch, actions) {

  return {
    loadUsers: async function() {
      const users = await userRest.getUsers();
      dispatch(actions.UPDATE_STATE({ users }));
      return users;
    }
  }

}