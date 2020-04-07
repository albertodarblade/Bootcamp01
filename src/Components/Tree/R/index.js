import React, { useState } from 'react';
import A from '../A';
import B from '../B';

function R() {
  console.log('Componet R is rendered');
  const [state, setState] = useState(0);


  return <>
    <div className="node"> Component R > A,B <button onClick={event => setState(state + 1)}> +1 </button> </div>
    <A />
    <B />
  </>
}

export default R;