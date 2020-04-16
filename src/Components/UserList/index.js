import React, { useEffect } from 'react';
import userRest from '../../Rest/Users';
import List from '../List';
import useApi from '../../Hooks/useApi';
import useInterval from '../../Hooks/useInterval';
import withView from '../../HOC/withView';


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

  if(error) {
    return <div> Error, {error.message}</div>
  }

  return (

    <section className="userListCmpt">
      <List users={users} />
    </section>
  );
}


export default withView(UserList);