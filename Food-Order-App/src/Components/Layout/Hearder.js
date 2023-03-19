import React from "react";
import mealsImage from "../../Static_Components/meals.jpg";
import styles from "./css/Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
