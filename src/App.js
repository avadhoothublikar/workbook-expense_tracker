import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


  const DummyExpenses = [
    {
      id: 'e1',
      title: 'Rent',
      amount: 5000,
      date: new Date(2020, 1, 12)
    },
    {
      id: 'e2',
      title: 'Food',
      amount: 2000,
      date: new Date(2020, 5, 12)
    },
    {
      id: 'e3',
      title: 'Petrol',
      amount: 3000,
      date: new Date(2020, 9, 12)
    }
  ];

  const App = () => {
    const [expenses, setExpenses] = useState(DummyExpenses);

    const addExpenseHandler = expense => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
