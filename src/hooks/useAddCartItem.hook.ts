import useAxios from "./useAxios";
import { RequestMethod } from '@Enums';

type Body = {
  product_id: number;
  product_quantity?: number;
}

function useAddCartItem(bodyData: Body) {
  const { data, error, loading, refetch } = useAxios<any>({
    url: 'carts/add_to_cart',
    method: RequestMethod.POST,
    body: bodyData,
    options: { isLazy: true }
  });

  return { data, error, loading, refetch };
}

export default useAddCartItem;