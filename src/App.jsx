import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import ExpenseList from "./components/budget/Expenselist";
import ExpenseForm from "./components/budget/ExpenseForm";
import Income from "./components/budget/Income";

import SavingsTracker from "./components/savings/SavingsTracker";
import EmergencyFund from "./components/emergency/EmergencyFund";
import AssetForm from "./components/assets/AssetForm";
import AssetList from "./components/assets/AssetList";
import {
  calculateTotalExpenses,
  calculateTotalAssets,
} from "./utils/calculations";
import useLocalStorage from "./hooks/useLocalStorage";



function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [income, setIncome] = useLocalStorage("income", 0);
  const [savings, setSavings] = useLocalStorage("savings", 0);
  const [emergencyFund, setEmergencyFund] = useLocalStorage("emergencyFund", 0);
  const [assets, setAssets] = useLocalStorage("assets", []);


  const totalAssets = calculateTotalAssets(assets);
  const [emergencyTarget] = useState(20000);
  const totalExpenses = calculateTotalExpenses(expenses);
  const balance = income - totalExpenses;
  
  const netWorth =
  totalAssets + savings + emergencyFund - totalExpenses;


  function addSavings(amount) {
  setSavings((prev) => prev + amount);
}
  function addToEmergency(amount) {
  setEmergencyFund((prev) => prev + amount);
}
  function addAsset(asset) {
  setAssets((prev) => [asset, ...prev]);
}


  

  return (
    <div>
      <Navbar />

      <h1>Finance Friendly Budget Manager</h1>

      {/* INCOME SECTION */}
      <h2>Monthly Income</h2>
      <Income onSetIncome={setIncome} />

      <h3>Income: ₹{income}</h3>

      {/* EXPENSE SECTION */}
      <h2>Add Expense</h2>
      <ExpenseForm onAddExpense={(expense) =>
        setExpenses((prev) => [expense, ...prev])
      } />

      <h2>Expenses</h2>
      <ExpenseList expenses={expenses} />

      <h3>Total Expenses: ₹{totalExpenses}</h3>

      {/* BALANCE */}
      <h3>Balance: ₹{balance}</h3>

      <SavingsTracker onSave={addSavings} />
      <h3>Total Savings: ₹{savings}</h3>

      <EmergencyFund
      target={emergencyTarget}
      current={emergencyFund}
      onAdd={addToEmergency}
      />
      <AssetForm onAddAsset={addAsset} />
      <AssetList assets={assets} />

      <h2>Financial Summary</h2>
      <p>Total Assets: ₹{totalAssets}</p>
      <p>Savings: ₹{savings}</p>
      <p>Emergency Fund: ₹{emergencyFund}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <h3>Net Worth: ₹{netWorth}</h3>


    </div>
  );
}

export default App;
