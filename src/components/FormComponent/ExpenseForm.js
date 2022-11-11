import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
  // const [initialtitle, setTitle] = useState("");
  // const [initialamount, setAmount] = useState("");
  // const [initiadate, setDate] = useState("");

  const [userInput,setUserInput]=useState({
    enteredTitle:"",
    enteredAmount:"",
    enteredDate:"",
  })
const titleChangeHandler = (event)=>{
  setUserInput({
    ...userInput,
    enteredTitle:event.target.value,
    
  })
  console.log(userInput)
}
const amountChangeHandler = (event)=>{
  setUserInput({
    ...userInput,
    enteredAmount:event.target.value,
    
  })
  console.log(userInput)
}
const dateChangeHandler = (event)=>{
  setUserInput({
    ...userInput,
    enteredDate:event.target.value,
    
  })
  console.log(userInput)
}
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(users);
  // };

  return (
    <>
      <form >
        <div className="new-expense__controls">
          <div className="new-expense__control">
            
            <label className="new-expense__control label">
              Expense title
              </label>
              <input
                type="text"
                className="new-expense__control input"
                name="expense title"
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
                name="expense amount"
                onChange={amountChangeHandler}
              ></input>
            
          </div>

          <div className="new-expense__control">
            <label className="new-expense__control label">
              Expense Date
              </label>
              <input
                type="date"
                className="new-expense__control input"
                name="expense date"
                onChange={dateChangeHandler}
              ></input>
            
          </div>
        </div>
        <div className="new-expense__actions">    
          <button>Add Expenses</button>
          </div>
      </form>
    </>
  );
};

export default ExpenseForm;
