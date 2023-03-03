import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amoutHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    const userInput = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(userInput);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            required={true}
            onChange={titleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amoutHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
