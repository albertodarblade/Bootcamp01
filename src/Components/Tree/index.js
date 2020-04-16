import React, { useState, useEffect, useContext } from 'react'
import GlobalContext from '../../Contexts/Global';
import R from './R';
import './styles.css';

function Tree() {
  console.log('Componet Tree is rendered');
  const {state, setState} = useContext(GlobalContext);

  useEffect(() => {
    console.log('Three was mounted ', state);
  }, [state]);
 // const [state, setState] = useState(0);
  return <div> 
    <label>Tree</label>
    <button onClick={event => setState({ ...state, theme: 'dark' })}> counter++ </button>
    <R />
  </div>
}

export default Tree;