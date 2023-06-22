import { useContext, useEffect, useRef, useState } from 'react';
import Axios from '@Axios';
import { RequestMethod } from '@Enums';
import authContext from '@/contexts/auth.context';

type ReturnType<T> = {
  loading?: boolean;
  error?: Error;
  data?: T;
  refetch?: () => Promise<void>;
}

export type Options = {
  isLazy?: boolean;
}

type ParametersUseAxios = {
  url: string;
  method: RequestMethod;
  body?: unknown;
  options?: Options;
}

function useAxios<T>(
  {
    url,
    method,
    body,
    options,
  }: ParametersUseAxios
): ReturnType<T> {
  const { setCurrentUser } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>(null);

  const cancelRequest = useRef<boolean>(false);

  const shouldCancelRequest = () => {
    if (cancelRequest.current) return;
  }

  const fetchByMethod = () => {
    switch (method) {
      case RequestMethod.GET:
        return Axios.get(url);
      case RequestMethod.POST:
        return Axios.post(url, body);
      case RequestMethod.PUT:
        return Axios.put(url);
      case RequestMethod.DELETE:
        return Axios.delete(url);
      default:
        return null;
    }
  }

  const handleUnAuthorizedError = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('current-user');
  }

  const fetchData = async () => {
    console.log("==> fetchData Started");
    try {
      setLoading(true);
      setError(null);
      const response = await fetchByMethod();
      shouldCancelRequest();
      setData(response.data);
    } catch (error: any) {
      shouldCancelRequest();
      if (error && error.status === 401 && error.statusText === "Unauthorized") {
        handleUnAuthorizedError();
        setCurrentUser(null);
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!url || !method || (options && options.isLazy === true)) return;
    cancelRequest.current = false;

    fetchData();
    return () => {
      cancelRequest.current = true;
    }
  }, [])

  return {
    loading,
    error,
    data,
    refetch: fetchData
  };
}

export default useAxios;
