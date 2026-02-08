import { useState } from "react";

function EmergencyFund({ target, current, onAdd }) {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;

    onAdd(Number(amount));
    setAmount("");
  }

  return (
    <div>
      <h2>Emergency Fund</h2>

      <p>Target: ₹{target}</p>
      <p>Saved: ₹{current}</p>

      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
  <input
    type="number"
    placeholder="Add emergency fund"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="border p-2 rounded w-48"
  />
  <button
    type="submit"
    className="bg-orange-500 text-white px-4 py-2 rounded"
  >
    Add
  </button>
</form>

      
    </div>
  );
}

export default EmergencyFund;
