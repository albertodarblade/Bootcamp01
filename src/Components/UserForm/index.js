import React, { useState } from 'react';
import userRest from '../../Rest/Users';
import useApiPost from '../../Hooks/useApiPost';
import withTurn from '../../HOC/withTurn';
import withView from '../../HOC/withView';

function UserForm({ isOnline, turn }) {
  const [form, setForm] = useState({});

  const [handleAsync, data] = useApiPost();

  function handleChange(event, key) {
    const newObject = {};
    newObject[key] = event.target.value;
    setForm({ ...form, ...newObject });
  }

  async function handleSubmit() {
    handleAsync(() => userRest.postUser(form))
  }

  if(data.error) {
    return <div> ERROR: {data.error.message}</div>
  }

  if(data.loading) {
    return <div> Saving... </div>;
  }

  return (
    <div>
      <label> isOnline: {isOnline}</label>
      <label> turn: {turn}</label>
      <label> name (controlled)</label>
      <input value={form.name} type="text" name="name" onChange={event => handleChange(event, 'name')} />

      <label> email (uncontrolled)</label>
      <input  value={form.email} type="email" name="email" onChange={event => handleChange(event, 'email')}/>
      <button onClick={handleSubmit}> Send </button>
    </div>
  )
}

export default withView(withTurn(UserForm));