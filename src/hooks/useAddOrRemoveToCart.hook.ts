import useAxios from "./useAxios";
import { RequestMethod } from '@Enums';

type Body = {
  product_id: number;
  product_quantity: number;
}

function useAddOrRemoveToCart({ product_id, product_quantity = -1 }: Body) {
  const { data, error, loading, refetch } = useAxios<any>({
    url: 'carts/add_to_cart',
    method: RequestMethod.POST,
    body: { product_id, product_quantity },
    options: { isLazy: true }
  });

  return { data, error, loading, refetch };
}

export default useAddOrRemoveToCart;
