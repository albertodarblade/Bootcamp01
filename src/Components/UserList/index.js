import React, { useEffect } from 'react';
import userRest from '../../Rest/Users';
import User from '../User';
import useApi from '../../Hooks/useApi';
import useInterval from '../../Hooks/useInterval';

import './styles.css';

const REFRESH_TIME = 5000;


function UserList() {

  const [users = [], loading, error] = useApi(loadUsers);
  useInterval(loadUsers, REFRESH_TIME);

  async function loadUsers() {
    try {
      const response = await userRest.getUsers();
      response.push({ name: 'unknown' });
      return response;
    } catch(error) {
      console.error(error);
    }
  }

  if (loading) {
    return <div> loading... </div>;
  }

  if(error) {
    return <div> Error, {error.message}</div>
  }

  return (
    <section className="userListCmpt">
      {users.map((user, index) => <User key={index} {...user}/>)}
    </section>
  );
}


export default UserList;