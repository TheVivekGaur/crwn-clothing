import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price }) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_hrMWraOEfMV3BSEK4Ts6rv3G00VUNQUowO';

 const onToken = token => {
 console.log(token);
 alert('Payment Successful');
}
return (
 <StripeCheckout 
    label= 'Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image= 'https://svgshare.com/i/Cuz.svg '
    description={ `Your total is $${price}`}
    amount={priceForStripe}
    panelLabel= 'Pay Now'
    token={onToken}
  stripeKey={publishableKey}
 />
);
};

export default StripeCheckoutButton;