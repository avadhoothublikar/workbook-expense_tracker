import React, {useState} from "react";
import './ExpenseForm.css';
import NewExpense from "./NewExpense";


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEneteredDate] = useState('');
    

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput((prevState) => {
        //     return{...prevState, enteredTitle: event.target.value}
        // })

    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const datechangeHandler = (event) => {
        setEneteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEneteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='10' step='0.01'/>
                </div>
                <div className="new-expense_control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={datechangeHandler} min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;