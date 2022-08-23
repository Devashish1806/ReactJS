import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const expenses = props.expenses;
  const [enteredYear, setEnteredYear] = useState('2020');
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
