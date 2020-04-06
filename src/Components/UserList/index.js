import React, { useEffect } from 'react';
import userRest from '../../Rest/Users';
import User from '../User';
import useApi from '../../Hooks/useApi';
import './styles.css';

const REFRESH_TIME = 5000;

let interval;

function UserList() {

  const [users = [], loading, error] = useApi(loadUsers);

  async function loadUsers() {
    try {
      const response = await userRest.getUsers();
      response.push({ name: 'unknown' });
      return response;
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    initRefreshInterval();
    return clearRefreshInterval;
  }, []);

  function clearRefreshInterval() {
    console.log('Clearing');
    clearInterval(interval);
  }

  function initRefreshInterval() {
    console.log('initianing');
    interval = setInterval(() => {
      loadUsers();
    }, REFRESH_TIME);
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