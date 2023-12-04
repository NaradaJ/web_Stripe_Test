// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import './StripeContainer.css'; // Import the CSS file

const CARD_OPTIONS = {
  // Define your card options if needed
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.error('Error during payment:', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="StripeContainer">
      <fieldset className='FormGroup'>
        <div className='FormRow'>
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
      <button type='submit'>Pay</button>
      {success && (
        <div className='SuccessMessage'>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
    </form>
  );
}
