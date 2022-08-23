import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');
  const filteredItems = props.items.filter(
    (expense) =>
      enteredYear === expense.date.toLocaleString('en-US', { year: 'numeric' }),
  );
  const changeFilterHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        selectedYear={enteredYear}
      ></ExpensesFilter>
      {filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
