import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
  <input
    type="text"
    placeholder="Expense title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="border p-2 rounded w-48"
  />

  <input
    type="number"
    placeholder="Amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="border p-2 rounded w-32"
  />

  <button
    type="submit"
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Add
  </button>
</form>

    
  );
}

export default ExpenseForm;
