import React from "react";
import Axios from '@Axios';

const logoutUrl = '/auth/logout';

type ReturnType = {
  loading?: boolean;
  error?: Error;
  data?: Object;
  logout?: () => Promise<void>;
}

const useLogout = (): ReturnType => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  const logout = async () => {
    setLoading(true);
    try {
      const response = await Axios.post(logoutUrl);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    logout,
    loading,
    data,
    error,
  }
}

export default useLogout;