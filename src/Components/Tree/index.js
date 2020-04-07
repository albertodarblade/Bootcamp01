import React, { useState, useEffect } from 'react'
import R from './R';
import './styles.css';

function Tree() {
  console.log('Componet Tree is rendered');

  useEffect(() => {
    console.log('Three was mounted ');
  }, []);
  const [state, setState] = useState(0);
  return <div> 
    <label>Tree {state}</label>
    <button onClick={event => setState(state + 1)}> counter++ </button>
    <R />
  </div>
}

export default Tree;