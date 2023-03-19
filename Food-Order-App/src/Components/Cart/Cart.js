import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./css/Cart.module.css";

const Cart = (props) => {
  // use context to get the items added to the cart
  const cartCtx = useContext(CartContext);

  // display total amount in cart
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // disable order button if there no item in the cart
  const hasItem = cartCtx.items.length > 0;

  const removeItemHander = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHander = (item) => {
    cartCtx.addItems({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemHander.bind(null, item)}
            onRemove={removeItemHander.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
