import React from 'react';
import { HeaderBar, OrderSummary, PaymentForm } from './components';

function CartPage() {
  return (
    <div>
      <HeaderBar />
      <div>
        <PaymentForm />
        <OrderSummary />
      </div>
    </div>
  );
}

export default CartPage;