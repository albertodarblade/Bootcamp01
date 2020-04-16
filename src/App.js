import React, { useState } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import Tree from './Components/Tree';
import GlobalProvider from './Contexts/Global/Provider';
import Home from './Views/Home';
import './App.css';

function App() {

  const [views, setViews] = useState(true);
  const [theme, setTheme] = useState('white');

  function toggleViews() {
    setViews(!views);
  }

  return (
    <div className="App">

      <GlobalProvider>
        <Home />
      </GlobalProvider>

    </div>
  );
}

export default App;
