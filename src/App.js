import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState(getExpenses());
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

function getExpenses() {
  return [
    {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
}

export default App;
