import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

const NewExpense = (props) => {
  const [isEditionEnabled, setIsEditionEnabled] = useState(false);
  const saveExpenseData = (savedExpenseData) => {
    const expenseData = {
      id: uuidv4(),
      ...savedExpenseData,
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditionEnabled(false);
  };

  const startEditing = () => {
    setIsEditionEnabled(true);
  };

  const stopEditing = () => {
    setIsEditionEnabled(false);
  };

  return (
    <div className="new-expense">
      {!isEditionEnabled && <button onClick={startEditing}>Add Expense</button>}
      {isEditionEnabled && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
