// StripeContainer.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'; // Import the correct component

const PUBLIC_KEY = "pk_test_51OJdFsI7xmZkPaQI6jfFywINqgAlU0EpnE3E9CbxZipUQfgJoiAMUSoibFxKTxpQxWkqwUUCvDsaa56UqJNANXGm007pwbxsk3";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}

export default StripeContainer;
