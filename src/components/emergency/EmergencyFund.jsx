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

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Add emergency amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default EmergencyFund;
