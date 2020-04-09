import React, { useState } from 'react';

function withFilter(Component, options) {


  const { key }= options
  function WrappedComponent(props) {
    const [form, setForm] = useState({});

    function filterCriteria(element) {
      if(!form.text) {
        return true;
      }
      return element.name && element.name.includes(form.text);
    }

    return (
      <>
        <input
          type="text" 
          value={form.text}
          onChange={event => setForm({...form, text: event.target.value })} />
        <Component {...props} users={props[key].filter(filterCriteria)} />

      </>
    );
  }

  return WrappedComponent;

}

export default withFilter;