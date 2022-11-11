import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  function deleteItem(){
    console.log("deleted!!!")
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}
export default ExpenseItem;
