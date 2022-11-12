

import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
const[isEditing,setEditing]=useState(false)
   const expenseHandler = (enteredExpenseData)=>{
    const expenseData ={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
   // console.log(expenseData)
   props.onAddExpense(expenseData)
   setEditing(false)
   }
const startEditing = () =>{
    setEditing(true)
}
const stopEditing = ()=>{
    setEditing(false)
}

    return <div className="new-expense">
   {!isEditing && ( <button onClick={startEditing}>Add New Expense</button>)} 
      {isEditing && ( <ExpenseForm onSaveData={expenseHandler} 
        onCancel={stopEditing}
      />) }
    </div>
}
export default NewExpense;