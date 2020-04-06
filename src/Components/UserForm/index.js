import React, { useState } from 'react';
import userRest from '../../Rest/Users';

function UserForm() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event, key) {
    const newObject = {};
    newObject[key] = event.target.value;
    setForm({ ...form, ...newObject });
  }

  async function handleSubmit() {
    try {
      setLoading(true);
      const response = await userRest.postUser(form);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  if(error) {
    return <div> ERROR: {error.message}</div>
  }

  if(loading) {
    return <div> Saving... </div>;
  }

  return (
    <div>
      <label> name (controlled)</label>
      <input value={form.name} type="text" name="name" onChange={event => handleChange(event, 'name')} />

      <label> email (uncontrolled)</label>
      <input  value={form.email} type="email" name="email" onChange={event => handleChange(event, 'email')}/>
      <button onClick={handleSubmit}> Send </button>
    </div>
  )
}

export default UserForm;