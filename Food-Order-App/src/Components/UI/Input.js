import React from "react";
import styles from "./css/Input.module.css";

// for custom components ref will not work out of the box
// we need to tell it to use ref, for which we need to wrap it with forwardRef

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
