import React, { useState } from 'react'
import D from '../D';

function B() {
  const [state, setState] = useState(0);

  console.log('Componet B is rendered');
  return (
    <>
      <div className="node">
        Component B > D
        <button onClick={event => setState(state + 1)}> +1 </button>
      </div>
      <D /> 
    </>
  );
}

export default B;