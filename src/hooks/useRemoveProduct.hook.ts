import useAxios, { Options } from "./useAxios";
import { RequestMethod } from '@Enums';
import { Cart } from '@Common/interfaces';

type Parameters = {
  product_id: number,
}

function useRemoveProduct(params: Parameters) {
  const { data, error, loading, refetch } = useAxios<Cart>({
    url: 'carts/remove_product',
    method: RequestMethod.DELETE,
    params,
    options: { isLazy: true },
  });

  return { data, error, loading, refetch };
}

export default useRemoveProduct;