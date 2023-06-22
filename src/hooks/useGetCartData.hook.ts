import useAxios, { Options } from "./useAxios";
import { RequestMethod } from '@Enums';
import { Cart } from '@Common/interfaces';

function useGetCartData(options?: Options) {
  const { data, error, loading, refetch } = useAxios<Cart>({ url: 'carts/get_cart', method: RequestMethod.GET, options });

  return { data, error, loading, refetch };
}

export default useGetCartData;