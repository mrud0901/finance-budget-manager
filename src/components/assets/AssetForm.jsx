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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
  <input
    type="text"
    placeholder="Asset name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="glass-input p-3 w-full text-slate-700 placeholder:text-slate-400"
  />

  <input
    type="number"
    placeholder="Asset value"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="glass-input p-3 w-full text-slate-700 placeholder:text-slate-400"
  />

  <button
    type="submit"
    className="btn-primary w-full py-3 mt-1"
  >
    Add Asset
  </button>
</form>

    
  );
}

export default AssetForm;
