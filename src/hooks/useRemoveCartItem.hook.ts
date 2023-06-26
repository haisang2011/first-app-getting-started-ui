import useAddOrRemoveToCart from "./useAddOrRemoveToCart.hook";

type Body = {
  product_id: number;
  product_quantity?: number;
}

function useRemoveCartItem({ product_id, product_quantity = -1 }: Body) {
  const { data, error, loading, refetch } = useAddOrRemoveToCart({ product_id, product_quantity });

  return { data, error, loading, refetch };
}

export default useRemoveCartItem;
