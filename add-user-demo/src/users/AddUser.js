import { useState, useRef } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
  const [error, setError] = useState();

  // Ref helps to connect a html element with react code
  const userName = useRef();
  const userAge = useRef();

  const formHandler = (event) => {
    event.preventDefault();

    if (
      userAge.current.value.trim().length === 0 ||
      userName.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age",
      });
      return;
    }

    if (+userAge.current.value < 1) {
      // by default JS takes everything as String, '+' will force converse this to Number
      setError({
        title: "Invalid input",
        message: "Please enter age >0",
      });
      return;
    }

    const user = {
      id: uuidv4(),
      userName: userName.current.value,
      userAge: +userAge.current.value,
    };

    props.onUserAdded(user);
    userName.current.value = "";
    userAge.current.value = "";
  };

  const handleError = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formHandler}>
          <div>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" ref={userName} />
          </div>
          <div>
            <label htmlFor="userage">Age(years)</label>
            <input id="userage" type="number" ref={userAge} />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
