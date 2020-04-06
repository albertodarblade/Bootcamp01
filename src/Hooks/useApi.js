import React, { useState, useEffect } from 'react';
/* Created for the initial calls GET */
function useApi(callback) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function requestCallback() {
   try {
    setLoading(true);
    const response = await callback();
    setResponse(response);
    setLoading(false);
   } catch (error) {
    setError(error);
   }
  }

  useEffect(() => {
    requestCallback();
  }, []);

  return [response, loading, error];
}

export default useApi;

/* Created for dinamyc request POST PATCH DELETE? */
