import React, { useState, useReducer } from 'react';
import globalReducer, { initialState } from './reducer';
import Context from '.';
import useRequests from './requests'
import actions from './actions';

function Provider({ children }) {

  const [state, dispatch] = useReducer(globalReducer, initialState)
  const requests = useRequests(state, dispatch, actions);

  return (
    <Context.Provider value={[ state, dispatch, requests ]}>
      {children}
    </Context.Provider>
  )

}

export default Provider;