import { useState } from "react";
import { Coffee, Home, ShoppingCart, Zap, Car, BookOpen, MoreHorizontal } from "lucide-react";

const CATEGORIES = [
  { id: "housing", label: "Housing", icon: Home, color: "text-blue-500" },
  { id: "food", label: "Food", icon: Coffee, color: "text-orange-500" },
  { id: "shopping", label: "Shopping", icon: ShoppingCart, color: "text-pink-500" },
  { id: "utilities", label: "Utilities", icon: Zap, color: "text-yellow-500" },
  { id: "transit", label: "Transit", icon: Car, color: "text-slate-500" },
  { id: "education", label: "Education", icon: BookOpen, color: "text-indigo-500" },
  { id: "other", label: "Other", icon: MoreHorizontal, color: "text-emerald-500" },
];

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date: new Date().toISOString()
    };

    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full">
        <input
          type="text"
          placeholder="Expense title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="glass-input p-3 w-full lg:flex-[2] text-slate-700 placeholder:text-slate-400"
        />

        <div className="relative w-full lg:flex-1">
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="glass-input p-3 w-full text-slate-700 appearance-none bg-white/50 cursor-pointer"
          >
            {CATEGORIES.map(c => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="glass-input p-3 w-full lg:w-32 text-slate-700 placeholder:text-slate-400"
        />
        
        <button
          type="submit"
          className="btn-primary px-6 py-3 w-full lg:w-auto"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
