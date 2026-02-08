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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter monthly income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <button type="submit">Set Income</button>
    </form>
  );
}

export default Income;
