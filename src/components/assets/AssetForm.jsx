import { useState } from "react";

function AssetForm({ onAddAsset }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !value) return;

    const asset = {
      id: Date.now(),
      name,
      value: Number(value),
    };

    onAddAsset(asset);
    setName("");
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Asset</h2>

      <input
        type="text"
        placeholder="Asset name (Gold, Cash, MF...)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Asset value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Add Asset</button>
    </form>
  );
}

export default AssetForm;
