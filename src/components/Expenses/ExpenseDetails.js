
import './ExpenseItem.css'
import React,{useState} from "react"
const ExpenseDetails = (props) => {
const [amount,setAmount]= useState(props.amount)
    const handleChange = () => {
      setAmount('100')
      console.log(amount)
    }
    return(
        <div className="expense-item">
          <div className="expense-item__description">
                <h2>{props.title}</h2>
                </div>
                <div className="expense-item__price">${amount}</div>
           
            <div>
            <button onClick={handleChange}>Change Amount</button>
            </div>
          
        </div>
    )
}
export default ExpenseDetails;