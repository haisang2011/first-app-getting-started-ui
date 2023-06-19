import useAxios from "./useAxios";
import { RequestMethod } from '@Enums';

interface Product {

}


function useProducts(method: RequestMethod) {
  const { data, error, loading, refetch } = useAxios('products', method);

  return { data, error, loading, refetch };
}

export default useProducts;