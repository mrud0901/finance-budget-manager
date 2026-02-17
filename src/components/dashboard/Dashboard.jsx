function Dashboard({
  income,
  totalExpenses,
  savings,
  emergencyFund,
  totalAssets,
  netWorth,
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Income Card */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Income</p>
          <h3 className="text-xl font-semibold text-green-600">
            ₹{income}
          </h3>
        </div>

        {/* Expense Card */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Expenses</p>
          <h3 className="text-xl font-semibold text-red-600">
            ₹{totalExpenses}
          </h3>
        </div>

        {/* Savings Card */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Savings</p>
          <h3 className="text-xl font-semibold text-blue-600">
            ₹{savings}
          </h3>
        </div>

        {/* Emergency Fund */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Emergency Fund</p>
          <h3 className="text-xl font-semibold text-yellow-600">
            ₹{emergencyFund}
          </h3>
        </div>

        {/* Assets */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Total Assets</p>
          <h3 className="text-xl font-semibold text-purple-600">
            ₹{totalAssets}
          </h3>
        </div>

        {/* Net Worth */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <p className="text-gray-500">Net Worth</p>
          <h3 className="text-xl font-bold text-green-700">
            ₹{netWorth}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
