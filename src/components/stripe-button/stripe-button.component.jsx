import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = 100 * price;
  const publishableKey =
    "pk_test_51Fj8tREh1LbLp58TzJsVxn42WbhQkn5aZYYt0rtUJnMNoO0rYkMOE8Pq7wsFi4gswhmL7ljGLQvgjbzyVfLKuQmg00tNBg7hbg";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRAWN Clothing Ltd."
      amount={priceForStripe}
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      image="https://i.pinimg.com/originals/ce/fa/fb/cefafbbaf88c1c529cd715becee89a73.jpg"
    />
  );
};

export default StripeCheckoutButton;
