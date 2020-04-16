import userRest from '../../Rest/Users'

export default function requests(state, dispatch, actions) {

  return {
    loadUsers: async function() {
      // async call
      const users = await userRest.getUsers();
      dispatch(actions.UPDATE_STATE({ users }));
      return users;
    }
  }

}