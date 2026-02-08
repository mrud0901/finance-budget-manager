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
    <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
  <input
    type="text"
    placeholder="Asset name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="border p-2 rounded w-48"
  />

  <input
    type="number"
    placeholder="Asset value"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="border p-2 rounded w-40"
  />

  <button
    type="submit"
    className="bg-purple-600 text-white px-4 py-2 rounded"
  >
    Add Asset
  </button>
</form>

    
  );
}

export default AssetForm;
