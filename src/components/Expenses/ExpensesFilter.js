import React from 'react';
import './ExpensesFilter.css';

function ExpensesFilter(props) {
  const yearChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className="expenses-filter__control">
        <label>FIlter By Year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
