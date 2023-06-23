import React from 'react';
import { Typography } from '@mui/material';
import "./orderSummary.scss";
import OrderItem from './OrderItem';
interface OrderSummaryProps {
  className?: string;
}

function OrderSummary(props: OrderSummaryProps) {
  return (
    <div className={`order-summary ${props.className ?? ''}`}>
      <Typography variant='h3' className='order-summary__title'>Cart</Typography>
      <div className='order-summary__cart-list'>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div >
  );
}

export default OrderSummary;