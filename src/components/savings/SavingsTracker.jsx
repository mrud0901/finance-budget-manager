import { useState } from "react";

function SavingsTracker({ onSave }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;

    onSave(Number(amount));
    setAmount("");
  }

  return (
    <div>
      <h2>Savings</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
  <input
    type="number"
    placeholder="Add savings"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="border p-2 rounded w-48"
  />
  <button
    type="submit"
    className="bg-green-600 text-white px-4 py-2 rounded"
  >
    Save
  </button>
</form>

      
    </div>
  );
}

export default SavingsTracker;
