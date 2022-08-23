import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const handleNewExpense = (newExpense) => {
    props.onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={handleNewExpense}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
