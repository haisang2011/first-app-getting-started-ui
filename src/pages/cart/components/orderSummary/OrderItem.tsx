import { Button, ButtonGroup, Typography } from '@mui/material';
import "./orderSummary.scss";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import cartContext, { CartDetailProps } from '@Context/cart.context';
import { formatCurrency } from '@Utilities';
import { useAddCartItem, useRemoveCartItem } from '@Hooks';
import React from 'react';
import useRemoveProduct from '@/hooks/useRemoveProduct.hook';

interface OrderItemProps {
  data: CartDetailProps;
}

function OrderItem(props: OrderItemProps) {
  const { getCartDataFromApi } = React.useContext(cartContext);
  const { refetch: addCartItem } = useAddCartItem({ product_id: props.data.product_id });
  const { refetch: removeCartItem } = useRemoveCartItem({ product_id: props.data.product_id });
  const { refetch: removeProduct } = useRemoveProduct({ product_id: props.data.product_id });

  const handleAddOrRemoveCartItem = (isAddCartItem: boolean) => () => {
    const promise = isAddCartItem ? addCartItem : removeCartItem;
    promise().then(() => getCartDataFromApi());
  }

  const handleRemoveProduct = () => {
    removeProduct().then(() => getCartDataFromApi());
  }

  return (
    <div className='order-summary__cart-item'>
      <div className='order-summary__photo'>
        <img src={props.data.product_image_url} />
      </div>
      <div className='order-summary__wrapper-information'>
        <div className='order-summary__information'>
          <div className='main-information'>
            <Typography variant='h2' className='main-information__product-name'>{props.data.product_name}</Typography>
            <Typography variant='h5' className='main-information__price'>{formatCurrency(props.data.product_price)}</Typography>
          </div>
          <Typography variant='h3' className='price'>{formatCurrency(props.data.product_price * props.data.quantity)}</Typography>
        </div>
        <div className='order-summary__actions'>
          <div className='quantity'>
            <ButtonGroup>
              <Button onClick={handleAddOrRemoveCartItem(false)}>
                <RemoveIcon />
              </Button>
              <Typography className='quantity__text'>{props.data.quantity}</Typography>
              <Button onClick={handleAddOrRemoveCartItem(true)}>
                <AddIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className='actions'>
            <Button
              className='actions__delete'
              variant="text"
              startIcon={<DeleteIcon />}
              onClick={handleRemoveProduct}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;