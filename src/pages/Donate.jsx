import React, { useEffect } from 'react';
import { Card } from 'antd';
import "../styles/donate.scss";
import coverImage from '../assets/1.jpg'; // Import the cover image
import Meta from 'antd/es/card/Meta';

const DonationButton = () => {
  useEffect(() => {
    let script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_M0dNyzGHsrqfAy');
    script.async = true;

    // Error handling to prevent script loading errors from appearing on the screen
    script.onerror = () => {
      script.remove(); // Remove the script element if an error occurs
    };

    try {
      document.getElementById('donation-form').appendChild(script);
    } catch (error) {
      console.error('Error loading Razorpay script:', error);
    }

    return () => {
      script.onerror = null; // Clean up the error handling when the component is unmounted
      script.remove(); // Remove the script element
    };
  }, []);

  return (
    <div className="donation-container">
      <Card
        hoverable
        style={{ width: '100%', maxWidth: 400 }}
        cover={<img alt="example" src={coverImage} />}
      >
        <Meta title="Future Leaders Fund" />
        <p>
        Your donation provides education, healthcare, and hope. Give today and make a difference in their future.
        </p>
        <form id="donation-form">
          {/* The Razorpay donation button will be inserted here */}
        </form>
      </Card>
    </div>
  );
};

export default DonationButton;
