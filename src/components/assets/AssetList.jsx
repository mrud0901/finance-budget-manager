function AssetList({ assets }) {
  return (
    <div>
      <h2>Your Assets</h2>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            {asset.name} — ₹{asset.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssetList;
