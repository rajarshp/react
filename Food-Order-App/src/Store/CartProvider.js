import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// reducer method taken 2 arg by default, state & action
// insiode the method we can define the action based on the type
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    // if any item is already present them update total amount for that
    const exitingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[exitingItemIndex];

    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitingItemIndex] = updateItem;
    } else {
      // React state work as by reference, so we shoult not modify the previsous state rather return a new state
      updatedItems = state.items.concat(action.item);
    }

    const updatedAmout =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmout,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    // if any item is already present them update total amount for that
    const exitingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[exitingItemIndex];
    const updatedAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exitingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // initialize reducer, which return an arry of 2 items
  // it also take two arg one is the reducer method and an object as value
  const [cartState, cartStateDispatcher] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemsHandler = (item) => {
    // call dispatcher method to update the state using reducer
    // it takes a object of 2 memebers, one is type another is the value
    cartStateDispatcher({ type: "ADD", item: item });
  };
  const removeItemHander = (id) => {
    cartStateDispatcher({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsHandler,
    removeItem: removeItemHander,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
