import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');
  const filteredList = props.items.filter(
    (expense) =>
      enteredYear === expense.date.toLocaleString('en-US', { year: 'numeric' }),
  );
  const changeFilterHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={changeFilterHandler}
          selectedYear={enteredYear}
        ></ExpensesFilter>
        <ExpensesList list={filteredList} />
      </Card>
    </li>
  );
}

export default Expenses;
