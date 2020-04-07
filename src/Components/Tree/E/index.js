import React, { useEffect } from 'react'

function E() {
  console.log('Componet E is rendered');

  useEffect(() => {
    console.log('E was mounted ');
  }, []);

  return <div className="node"> Component E </div>
}

export default E;