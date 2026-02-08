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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Add savings amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add to Savings</button>
      </form>
    </div>
  );
}

export default SavingsTracker;
