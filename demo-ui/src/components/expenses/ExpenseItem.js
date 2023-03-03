import React from "react";
import "./ExpenseItem.css";
import ExpendeDate from "./ExpenseDate";
import Card from "./Card";
//import ButtonClicked from "../events/ButtonHandler";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpendeDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">{props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
