import React from 'react'
import E from '../E';

function D() {
  console.log('Componet D is rendered');
  return <><div className="node"> Component D > E </div> <E /></>
}

export default D;