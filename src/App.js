import React, { useState } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import Tree from './Components/Tree';
import './App.css';

function App() {

  const [views, setViews] = useState(true);

  function toggleViews() {
    setViews(!views);
  }

  return (
    <div className="App">

 {/*      <UserForm isOnline={'true'} error={new Error('THe api fails')}/> */}
      <UserList />
      {/* <Tree /> */}
     {/*  <UserForm />
      <button onClick={toggleViews}> toggle </button>
      {views && <UserList />}
      {!views && <div> empty </div>}
 */}
    </div>
  );
}

export default App;
