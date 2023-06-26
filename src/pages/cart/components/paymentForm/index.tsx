import React from 'react';
import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import "./paymentForm.scss";
import cartContext from '@Context/cart.context';
import { formatCurrency } from '@Utilities';

interface PaymentFormProps {
  className?: string;
}

function PaymentForm(props: PaymentFormProps) {
  const { cartData } = React.useContext(cartContext);

  const renderNoItems = () => <div className='payment-form__no-item'>No order item in this Cart</div>

  const renderTotal = () => {
    const total = cartData.cart_details.reduce(
      (acc, item) => acc + (item.product_price * item.quantity),
      0
    );

    if (!total) return;

    return (
      <React.Fragment>
        <Divider sx={{ my: 1 }} />
        <Typography className="payment-form__order-total">
          Total: {formatCurrency(total)}
        </Typography>
      </React.Fragment>
    );
  }

  const renderOrderListSection = () => {
    if (!cartData || cartData.cart_details.length === 0) return renderNoItems();

    return (
      <React.Fragment>
        <List className='payment-form__list'>
          {cartData && cartData.cart_details.map(cartItem => (
            <ListItem className='payment-form__list-item'>
              <ListItemText
                className='payment-form__list-item-text product-name'
                primary={cartItem.product_name}
              />
              <ListItemText
                className='payment-form__list-item-text product-price'
                primary={formatCurrency(cartItem.product_price)}
                secondary={`x${cartItem.quantity}`}
              />
              <ListItemText
                className='payment-form__list-item-text product-total'
                primary={formatCurrency(cartItem.product_price * cartItem.quantity)}
              />
            </ListItem>
          ))}
        </List>
        {renderTotal()}
        <Box sx={{ my: 3 }} />
        <Button fullWidth variant='contained' className='payment-form__order-button'>Confirm Order</Button>
      </React.Fragment>
    );
  }

  return (
    <div className={`${props.className ?? ''} payment-form`}>
      <Typography variant='h3' className='payment-form__title'>Checkout Order</Typography>
      {renderOrderListSection()}
    </div>
  )
}

export default PaymentForm;