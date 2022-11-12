import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){

const[filteredYear,setFilteredYear]=useState("2020");
const handleFilterChange=selectedYear=>{
    setFilteredYear(selectedYear)
}


    return(
        <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={handleFilterChange}/>
        {props.items.map((expense)=>(
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