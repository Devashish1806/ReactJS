import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const handleSaveNewExpense = (newExpense) => {
    let expenseData = { ...newExpense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={handleSaveNewExpense}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
