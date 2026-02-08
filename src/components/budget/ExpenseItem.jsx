function ExpenseItem({ expense }) {
  return (
    <li>
      {expense.title} - ₹{expense.amount}
    </li>
  );
}

export default ExpenseItem;
