import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setName] = useState("");
  const nameInputRef = useRef();

  const enteredNameHandler = (event) => {
    setName(event.taget.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    alert(enteredName);
    setName("");

    // nameInputRef.current.value ="" -- THIS IS NOT IDEAL AS IT WILL DIRECTLY CHANGE THE DOM WHICH IS NOT RECEOMMENDED
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
