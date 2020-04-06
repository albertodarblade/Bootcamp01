import React, { useState } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import './App.css';

function App() {

  const [views, setViews] = useState(true);

  function toggleViews() {
    setViews(!views);
  }

  return (
    <div className="App">
      <UserForm />
      <button onClick={toggleViews}> toggle </button>
      {views && <UserList />}
      {!views && <div> empty </div>}

    </div>
  );
}

export default App;
