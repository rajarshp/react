import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
import React from "react";

const ErrorModal = (props) => {
  //use portal to display backdrop and Modal

  const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
