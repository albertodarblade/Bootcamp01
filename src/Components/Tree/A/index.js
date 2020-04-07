import React, { useState } from 'react'
import C from '../C';

function A() {
  console.log('Componet A is rendered');
  const [state, setState] = useState(0);

  return <>
    <div className="node">
      Component A > C
      <button onClick={event => setState(state + 1)}> +1 </button>
    </div>
    

    <C />
  </>
}

export default A;