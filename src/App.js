import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/FormComponent/NewExpense";
import React,{useState} from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Laptop",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
 const[expenses,setExpenses]=useState(DUMMY_DATA)
const expenseHandler=(expense)=>{
  setExpenses(prevExpenses=>{
    return [expense,...prevExpenses]
  })
console.log(expense)
}




  return (
    <>
    <NewExpense onAddExpense={expenseHandler}/>
     <Expenses items={expenses}/>
  </>
    
  );
}

export default App;
