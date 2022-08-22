import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: 'numeric' });
  const year = props.date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <Card className="date">
      <div id="Expense-Date__month">{month}</div>
      <div id="Expense-Date__year">{day}</div>
      <div id="Expense-Date__year">{year}</div>
    </Card>
  );
}

export default ExpenseDate;
