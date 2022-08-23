import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // first is the property name and the second is the function attached to it for updating the state.
  // use state will reexcute the particular component inside chich it is called not all components are executed again.
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
