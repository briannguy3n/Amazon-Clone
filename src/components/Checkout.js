import React from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
        <h2>The subtotal will go here</h2>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
