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
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
  <input
    type="number"
    placeholder="Enter monthly income"
    value={income}
    onChange={(e) => setIncome(e.target.value)}
    className="border p-2 rounded w-64"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    Set Income
  </button>
</form>

  );
}

export default Income;
