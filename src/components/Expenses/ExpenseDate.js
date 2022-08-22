function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const date = props.date.toLocaleString('en-US', { day: 'numeric' });
  const year = props.date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <div>
      <div>{month}</div>
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
