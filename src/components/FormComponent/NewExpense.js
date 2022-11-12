import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

   const expenseHandler = (enteredExpenseData)=>{
    const expenseData ={
        ...enteredExpenseData,
        id:Math.random().toString()
    }
   // console.log(expenseData)
   props.onAddExpense(expenseData)
   }


    return <div className="new-expense">
        <ExpenseForm onSaveData={expenseHandler}/>
    </div>
}
export default NewExpense;