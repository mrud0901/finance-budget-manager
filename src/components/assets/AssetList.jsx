function AssetList({ assets }) {
  if (assets.length === 0) {
    return <p className="text-slate-500 text-sm mt-4">No assets added yet. Add your first asset.</p>;
  }

  return (
    <div className="mt-4">
      <ul className="space-y-2">
        {assets.map((asset) => (
          <li key={asset.id} className="flex justify-between items-center p-4 bg-white/40 border border-purple-100/60 rounded-xl hover:bg-white/60 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 text-xs">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="font-medium text-slate-700">{asset.name}</span>
            </div>
            <span className="font-bold text-slate-900">₹{asset.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssetList;
