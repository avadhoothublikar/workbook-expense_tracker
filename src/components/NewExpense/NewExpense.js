import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setExpanded(false);
    }

    const expand = () => {
        setExpanded(true);
    }

    const stopEditing = () => {
        setExpanded(false);
    }

    return (
        <diV className="new-expense">
        {!isExpanded && <button onClick={expand}>Add New Expense</button>}
        {isExpanded && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditing} />}
        </diV>
    )
}

export default NewExpense;