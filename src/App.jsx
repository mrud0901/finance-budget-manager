import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, PieChart, Landmark, ArrowRightLeft, ShieldAlert } from "lucide-react";
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
  const [emergencyFund, setEmergencyFund] = useLocalStorage("emergencyFund", 0);
  const [assets, setAssets] = useLocalStorage("assets", []);
  
  const [activeTab, setActiveTab] = useState("overview");

  const [emergencyTarget] = useState(20000);

  const totalExpenses = calculateTotalExpenses(expenses);
  const totalAssets = calculateTotalAssets(assets);
  const balance = income - totalExpenses;
  const netWorth = totalAssets + savings + emergencyFund - totalExpenses;

  function addSavings(amount) {
    setSavings((prev) => prev + amount);
  }

  function addToEmergency(amount) {
    setEmergencyFund((prev) => prev + amount);
  }

  function addAsset(asset) {
    setAssets((prev) => [asset, ...prev]);
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen pb-12 overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <motion.div 
        className="w-full max-w-6xl p-4 md:p-6 space-y-6 md:space-y-8 mt-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight mb-2">
            Finance Friendly
          </h1>
          <p className="text-slate-500 font-medium">Smart Budget Manager</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div 
              key="overview"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Dashboard
                income={income}
                totalExpenses={totalExpenses}
                savings={savings}
                emergencyFund={emergencyFund}
                totalAssets={totalAssets}
                netWorth={netWorth}
                expenses={expenses}
                assets={assets}
              />
            </motion.div>
          )}

          {/* TAB 2: BUDGET / CASH FLOW */}
          {activeTab === 'budget' && (
            <motion.div 
              key="budget"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                    Monthly Income
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                     <LayoutDashboard className="w-5 h-5" />
                  </div>
                </div>
                <Income onSetIncome={setIncome} />
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Current Income</span>
                  <span className="text-2xl font-bold text-slate-800">₹{income.toLocaleString()}</span>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                    Expenses
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <ArrowRightLeft className="w-5 h-5" />
                  </div>
                </div>
                <ExpenseForm onAddExpense={(expense) => setExpenses((prev) => [expense, ...prev])} />
                <div className="mt-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  <ExpenseList expenses={expenses} />
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-red-600">
                    <span className="font-medium">Total Expenses</span>
                    <span className="text-xl font-bold">₹{totalExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-indigo-600">
                    <span className="font-medium">Balance</span>
                    <span className="text-xl font-bold">₹{balance.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <motion.div 
              key="portfolio"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                    Savings Strategy
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    <Landmark className="w-5 h-5" />
                  </div>
                </div>
                <SavingsTracker onSave={addSavings} currentSavings={savings} />
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Total Saved</span>
                  <span className="text-2xl font-bold text-blue-600">₹{savings.toLocaleString()}</span>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-500">
                    Emergency Fund
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-slate-500">Progress</span>
                    <span className="text-amber-500">{Math.min(100, Math.round((emergencyFund / emergencyTarget) * 100))}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (emergencyFund / emergencyTarget) * 100)}%` }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <EmergencyFund target={emergencyTarget} current={emergencyFund} onAdd={addToEmergency} />
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex justify-between items-center text-yellow-600">
                    <span className="font-medium">Target Target</span>
                    <span className="font-bold">₹{emergencyTarget.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span className="font-medium">Current Protected</span>
                    <span className="text-xl font-bold">₹{emergencyFund.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 md:p-8 md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-500">
                    Asset Portfolio Management
                  </h2>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                    <Landmark className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <AssetForm onAddAsset={addAsset} />
                  </div>
                  <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar border-l border-slate-100 pl-4 md:pl-8">
                    <AssetList assets={assets} />
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Total Assets Value</span>
                  <span className="text-3xl font-bold text-purple-600">₹{totalAssets.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
