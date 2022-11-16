import React from 'react';

import './ExpenseDate.css';

function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-IN', {month:'long'});
    const day = props.date.toLocaleString('en-IN', {day:'2-digit'});


return(
    <div className='expense-date'>
        <div className='expense-date_year'>{year}</div>
        <div className='expense-date_month'>{month}</div>
        <div className='expense-date_day'>{day}</div>
    </div>
);
}

export default ExpenseDate;