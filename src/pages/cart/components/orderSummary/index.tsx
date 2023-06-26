import React from 'react';
import { Typography } from '@mui/material';
import "./orderSummary.scss";
import OrderItem from './OrderItem';
import cartContext from '@Context/cart.context';
interface OrderSummaryProps {
  className?: string;
}

function OrderSummary(props: OrderSummaryProps) {
  const { cartData } = React.useContext(cartContext);

  const renderNoItems = () => <div className='order-summary__no-item'>No cart item in this Cart</div>

  return (
    <div className={`order-summary ${props.className ?? ''}`}>
      <Typography variant='h3' className='order-summary__title'>Cart</Typography>
      <div className='order-summary__cart-list'>
        {cartData && cartData.cart_details.length > 0 ? cartData.cart_details.map(
          cartItem => <OrderItem key={cartItem.product_id} data={cartItem} />
        ) : renderNoItems()}
      </div>
    </div >
  );
}

export default OrderSummary;