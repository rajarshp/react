import React, { useState } from "react";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const today = new Date();
  const [selectYear, setSelectedYear] = useState(today.getFullYear());
  const onSelectValueHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
    console.log(selectYear);
  };

  const filteredItems = props.listData.filter((arrayItem) =>
    arrayItem.date.toString().includes(selectYear)
  );

  return (
    <div>
      <Card className="expense">
        <ExpensesFilter
          selected={selectYear}
          onSelectValue={onSelectValueHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
