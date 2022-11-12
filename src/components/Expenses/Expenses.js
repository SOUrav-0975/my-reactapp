import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h3>No Expenses Found</h3>;
  
  
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  let oneExpenseMsg;
  
  if (filteredExpenses.length === 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
   
    ));
     oneExpenseMsg =  <h3>Only  single Expense here.Please add more...</h3>
  }
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        <ExpenseChart expenses = { filteredExpenses}/>
          {expensesContent}
         {oneExpenseMsg}
      </div>
    
    </>
  );
}
export default Expenses;
