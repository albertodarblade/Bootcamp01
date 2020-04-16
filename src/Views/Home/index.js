import React, { useContext, useEffect } from 'react';
import globalContext from '../../Contexts/Global';
import actions from '../../Contexts/Global/actions';
import List from '../../Components/List';


function Home() {

  const [state, dispatch, requests] = useContext(globalContext);
  useEffect(() => {
    requests.loadUsers();
  }, []);
  return (
    <div>
      Home is here
      <List users={state.users} />
    </div>
  )
}

export default Home;