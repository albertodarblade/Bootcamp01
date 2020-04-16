export default {
  UPDATE_STATE: function (payload) {
    return {
      type: 'UPDATE_STATE',
      payload
    }
  },
  ADD_USER: function (payload) {
    return {
      type: 'ADD_USER',
      payload
    }
  },
  REMOVE_USER: function (payload) {
    return {
      type: 'REMOVE_USER',
      payload
    }
  },
  UPDATE_USER: function (payload) {
    return {
      type: 'UPDATE_USER',
      payload
    }
  }
}