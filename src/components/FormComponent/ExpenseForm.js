import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:"",
  // })
const titleChangeHandler = (event)=>{
  setTitle(event.target.value)
 
}
const amountChangeHandler = (event)=>{
  setAmount(event.target.value)
}
const dateChangeHandler = (event)=>{
  setDate(event.target.value)
}
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
       }
       props.onSaveData(expenseData);
       setTitle("");
       setAmount("");
       setDate("")
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            
            <label className="new-expense__control label">
              Expense title
              </label>
              <input
                type="text"
                className="new-expense__control input"
                name="title"
               value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
           
          </div>

          <div className="new-expense__control">
            
            <label className="new-expense__control label">
              Expense Amount
              </label>
              <input
                type="number"
                className="new-expense__control input"
                name="amount"
                value={enteredAmount}
                onChange={ amountChangeHandler}
              ></input>
            
          </div>

          <div className="new-expense__control">
            <label className="new-expense__control label">
              Expense Date
              </label>
              <input
                type="date"
                className="new-expense__control input"
                name="date"
             value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
            
          </div>
        </div>
        <div className="new-expense__actions">    
        <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expenses</button>
          </div>
      </form>
    </>
  );
};

export default ExpenseForm;
