import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  if (props.list.length === 0) {
    return <p>No Expense Data Found</p>;
  }
  return (
    <ul className="expenses-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
