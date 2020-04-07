import { useState } from "react";

function useApiPost() {

  const [state, setState] = useState({
    loading: false,
    error: null
  });

  async function handleAsync(callback) {
    try {
      setState({...state, loading: true });
      const response = await callback();
      setState({...state, response, loading: false });

    } catch(error) {
      setState({ ...state, error });
    }
  }

  return [handleAsync, state];
}

export default useApiPost;