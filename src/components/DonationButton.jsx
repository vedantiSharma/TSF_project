import React, { useEffect } from 'react';

const DonationButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_M0dNyzGHsrqfAy');
    script.async = true;
    document.getElementById('donation-form').appendChild(script);

    return () => {
      document.getElementById('donation-form').removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Donation Form</h2>
      <form id="donation-form">
        {/* The Razorpay donation button will be inserted here */}
      </form>
    </div>
  );
};

export default DonationButton;
