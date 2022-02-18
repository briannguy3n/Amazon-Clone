    this.state = {
      bgColor: "",
    };


  boxClick = (e) => {
    this.setState({
      bgColor: "red",
    });
  };

  render() {
    return (
      <div className="App">
        <article className="experimentsHolder">
          <div
            className="boxClickCss"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}
          >
            Click Me!
          </div>
        </article>
      </div>
    );
  }


// ----------------------------------------------------------------------------

import React, { useState } from "react";

function Example() {

  const [count, setCount] = useState("");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={setCount}>Click me</button>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}



Basically whenever the Add to Basket button in my Product component is clicked, I want the Shopping Bag in the Header component to flash or expand.

Product Component:

import "../styles/Product.css";
import React, { useState } from "react";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const [buttonStyle, setButtonStyle] = useState("");

  const addToBasket = () => {
    // dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;



Header Component:

```
import React from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase-config";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Add Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

```

Once the Add to Basket button is clicked, how would we make the shopping bag in the Header component flash or expand?