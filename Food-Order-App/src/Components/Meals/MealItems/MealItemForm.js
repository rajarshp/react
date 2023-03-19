import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./css/MealItemForm.module.css";

const MealItemForm = (props) => {
  // use ref to get the value enetered by the user
  const inputAmountRef = useRef();

  // define a state to catch and maintain an error
  const [isAmountValid, setIsAmountValid] = useState(true);

  const submitFormHandler = (event) => {
    event.preventDefault();
    // fetch the value using ref
    // by default all js values are String, so need to convert it to number using +
    const enteredAMount = inputAmountRef.current.value;

    if (
      enteredAMount.trim().length === 0 ||
      +enteredAMount < 1 ||
      +enteredAMount > 5
    ) {
      // if condition fails do not proceed
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+enteredAMount);
  };
  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        ref={inputAmountRef}
        input={{
          id: "Amount" + props.id,
          type: "Number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!isAmountValid && <p> Please entera value amount of 1-5</p>}
    </form>
  );
};

export default MealItemForm;
