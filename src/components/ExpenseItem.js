
import './ExpenseItem.css'


function ExpenseItem(){
   const expenseDate=new Date(2022,11,10);
   const expenseTitle='car insurance';
   const expenselocation='on car';
   const expenseamount=290



    return (
        <div className="expense-item">
            <div className="expense-item__date">{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h2>ExpenseLocation-{expenselocation}</h2>
                <div className="expense-item__price">${expenseamount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;