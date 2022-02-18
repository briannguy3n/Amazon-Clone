import React from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Payment.css";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="Payment">
      <div className="payment_container">
        {/* Payment section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items"></div>
        </div>
        {/* Payment section - Payment Method */}
        <div className="payment_section"></div>
      </div>
    </div>
  );
};

export default Payment;
