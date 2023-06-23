import React from 'react';
import { HeaderBar, OrderSummary, PaymentForm } from './components';
import { Box } from '@mui/material';
import "./cart.styles.scss";

function CartPage() {
  return (
    <div className='container'>
      <HeaderBar className='header-bar-container' />
      <Box sx={{ display: 'flex', gap: 2 }} >
        <div className='order-summary-wrapper' >
          <OrderSummary className='order-summary-container' />
        </div>
        <PaymentForm className='payment-form-container' />
      </Box>
    </div>
  );
}

export default CartPage;