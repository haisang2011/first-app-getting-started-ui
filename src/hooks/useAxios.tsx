import { useEffect, useRef, useState } from 'react';
import Axios from '@Axios';

type ReturnType<T> = {
  loading?: boolean;
  error?: Error;
  data?: T;
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function useAxios<T>(url: string, method: RequestMethod): ReturnType<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>(null);

  const cancelRequest = useRef<boolean>(false);

  const shouldCancelRequest = () => {
    if (cancelRequest.current) return;
  }

  const getData = () => (
    Axios({
      method,
      url,
    })
  );

  const fetchByMethod = () => {
    switch (method) {
      case RequestMethod.GET:
        return getData();
      case RequestMethod.POST:
        return Axios.post(url);
      case RequestMethod.PUT:
        return Axios.put(url);
      case RequestMethod.DELETE:
        return Axios.delete(url);
      default:
        return null;
    }
  }

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchByMethod();
        shouldCancelRequest();
        setData(response.data);
      } catch (error) {
        shouldCancelRequest();
        setError("Has Error: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    }
  }, [])

  return {
    loading,
    error,
    data,
  };
}

export default useAxios;
