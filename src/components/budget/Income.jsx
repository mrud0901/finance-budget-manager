import { useState } from "react";

function Income({ onSetIncome }) {
  const [income, setIncome] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!income) return;

    onSetIncome(Number(income));
    setIncome("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center w-full">
  <input
    type="number"
    placeholder="Enter monthly income"
    value={income}
    onChange={(e) => setIncome(e.target.value)}
    className="glass-input p-3 w-full sm:flex-1 text-slate-700 placeholder:text-slate-400"
  />
  <button
    type="submit"
    className="btn-primary px-6 py-3 w-full sm:w-auto whitespace-nowrap"
  >
    Set Income
  </button>
</form>

  );
}

export default Income;
