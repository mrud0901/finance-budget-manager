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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="number"
          placeholder="Add to fund"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="glass-input p-3 w-full sm:flex-1 text-slate-700 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="btn-primary px-6 py-3 w-full sm:w-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default EmergencyFund;
