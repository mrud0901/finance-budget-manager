import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p className="text-slate-500 text-sm mt-4 text-center py-6 bg-slate-50/50 rounded-xl border border-slate-100">No expenses added yet. Add an expense above.</p>;
  }

  return (
    <ul className="mt-4">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
