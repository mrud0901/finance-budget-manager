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
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [income, setIncome] = useLocalStorage("income", 0);
  const [savings, setSavings] = useLocalStorage("savings", 0);
  const [emergencyFund, setEmergencyFund] = useLocalStorage(
    "emergencyFund",
    0
  );
  const [assets, setAssets] = useLocalStorage("assets", []);

  const [emergencyTarget] = useState(20000);

  const totalExpenses = calculateTotalExpenses(expenses);
  const totalAssets = calculateTotalAssets(assets);
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
    <>
      <Navbar />

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <Dashboard
          income={income}
          totalExpenses={totalExpenses}
          savings={savings}
          emergencyFund={emergencyFund}
          totalAssets={totalAssets}
          netWorth={netWorth}
        />

        <h1 className="text-2xl font-bold">
          Finance Friendly Budget Manager
        </h1>

        {/* INCOME SECTION */}
        <h2 className="text-lg font-semibold">
          Monthly Income
        </h2>
        <Income onSetIncome={setIncome} />
        <h3 className="font-medium">
          Income: ₹{income}
        </h3>

        {/* EXPENSE SECTION */}
        <h2 className="text-lg font-semibold">
          Add Expense
        </h2>
        <ExpenseForm
          onAddExpense={(expense) =>
            setExpenses((prev) => [expense, ...prev])
          }
        />

        <h2 className="text-lg font-semibold">
          Expenses
        </h2>
        <ExpenseList expenses={expenses} />
        <h3 className="font-medium">
          Total Expenses: ₹{totalExpenses}
        </h3>

        {/* BALANCE */}
        <h3 className="font-medium">
          Balance: ₹{balance}
        </h3>

        {/* SAVINGS */}
        <SavingsTracker onSave={addSavings} />
        <h3 className="font-medium">
          Total Savings: ₹{savings}
        </h3>

        {/* EMERGENCY FUND */}
        <EmergencyFund
          target={emergencyTarget}
          current={emergencyFund}
          onAdd={addToEmergency}
        />

        {/* ASSETS */}
        <AssetForm onAddAsset={addAsset} />
        <AssetList assets={assets} />
      </div>
    </>
  );
}

export default App;
