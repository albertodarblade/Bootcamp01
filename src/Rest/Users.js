import axios from 'axios';
const API = 'https://meremind.herokuapp.com'

export default {
  getUsers: async function() {
    const response = await axios.get(API + '/users')
    return response.data.data;
  },

  postUser: async function(payload) {
    const response = await axios.post(API + '/users', payload);
    return response.data.data;
  }
}