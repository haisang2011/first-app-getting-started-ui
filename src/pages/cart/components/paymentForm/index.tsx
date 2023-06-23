import React from 'react';

interface PaymentFormProps {
  className?: string;
}

function PaymentForm(props: PaymentFormProps) {
  return (
    <div className={`${props.className ?? ''}`} />
  );
}

export default PaymentForm;