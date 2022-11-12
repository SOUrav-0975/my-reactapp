import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){

const[filteredYear,setFilteredYear]=useState("2020");

const handleFilterChange=selectedYear=>{
    setFilteredYear(selectedYear)
}

const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear
})
    return(
        <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange}/>
        {filteredExpenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}

        </div>
    )
}
export default Expenses;