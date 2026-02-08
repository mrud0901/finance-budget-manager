function Dashboard({
  income,
  totalExpenses,
  savings,
  emergencyFund,
  totalAssets,
  netWorth,
}) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        Dashboard
      </h2>

      <p>Income: ₹{income}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <p>Savings: ₹{savings}</p>
      <p>Emergency Fund: ₹{emergencyFund}</p>
      <p>Total Assets: ₹{totalAssets}</p>

      <h3 className="text-lg font-bold text-green-600 mt-4">
        Net Worth: ₹{netWorth}
      </h3>
    </div>
  );
}

export default Dashboard;
