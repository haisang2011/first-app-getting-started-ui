import useAxios from "./useAxios";
import { RequestMethod } from '@Enums';
import { Product } from '@Common/interfaces';

function useProducts(method: RequestMethod) {
  const { data, error, loading, refetch } = useAxios<Product[]>({ url: 'products', method });

  return { data, error, loading, refetch };
}

export default useProducts;