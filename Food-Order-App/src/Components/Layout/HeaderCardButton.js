import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/Cart-Context";
import CartIcon from "../Cart/CartIcon";
import styles from "./css/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // use context to update the value whenever we add an item to cart
  const cartCtx = useContext(CartContext);

  // now use animation when we add item in cart
  const [btnHilighted, setBtnHighlighted] = useState(false);
  const btnStyle = `${styles.button} ${btnHilighted ? styles.bump : ""}`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    // set a timer to clear the effect after it's added

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    // now use the clean timer to remove any side affect

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
