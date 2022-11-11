import React,{ useState } from "react";



const ExpenseForm = () => {
const [users,setUser]=useState({})


const handleChange = (e)=>{
    setUser({
        ...users,
        [e.target.name]:e.target.value
    })
    console.log(users)
   
}
const handleSubmit=(e)=>{
e.preventDefault();
console.log(users)
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Expense title:
          <input type="text" name="expense title" onChange={handleChange}></input>
        </label>
        
        
        <label>
          Expense Amount"
          <input type="number"  name="expense amount" onChange={handleChange}></input>
        </label>
        
        <label>
          Expense Date:
          <input type="date"  name="expense date" onChange={handleChange}></input>
        </label>
    
        <input type="submit"></input>
      </form>
    </>
  );
};

export default ExpenseForm;
