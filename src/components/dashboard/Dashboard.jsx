import { motion } from "framer-motion";
import { Wallet, TrendingUp, PiggyBank, ShieldAlert, Landmark, CircleDollarSign } from "lucide-react";
import OverviewChart from "./OverviewChart";
import WealthChart from "./WealthChart";

function Dashboard({
  income,
  totalExpenses,
  savings,
  emergencyFund,
  totalAssets,
  netWorth,
  expenses = [],
  assets = []
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5 } }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900">
          Financial Overview
        </h2>
      </div>

      {/* Main Stats Grid */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Income Card */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <Wallet className="w-5 h-5 text-green-500" />
            <p className="text-slate-500 font-medium text-sm md:text-base">Income</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-green-600 relative z-10">
            ₹{income.toLocaleString()}
          </h3>
        </motion.div>

        {/* Expense Card */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <TrendingUp className="w-5 h-5 text-red-500" />
            <p className="text-slate-500 font-medium text-sm md:text-base">Expenses</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-red-500 relative z-10">
            ₹{totalExpenses.toLocaleString()}
          </h3>
        </motion.div>

        {/* Savings Card */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <PiggyBank className="w-5 h-5 text-blue-500" />
            <p className="text-slate-500 font-medium text-sm md:text-base">Savings</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-blue-500 relative z-10">
            ₹{savings.toLocaleString()}
          </h3>
        </motion.div>

        {/* Emergency Fund */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <ShieldAlert className="w-5 h-5 text-yellow-500" />
            <p className="text-slate-500 font-medium text-sm md:text-base">Emergency</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-amber-500 relative z-10">
            ₹{emergencyFund.toLocaleString()}
          </h3>
        </motion.div>

        {/* Assets */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <Landmark className="w-5 h-5 text-purple-500" />
            <p className="text-slate-500 font-medium text-sm md:text-base">Assets</p>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-purple-600 relative z-10">
            ₹{totalAssets.toLocaleString()}
          </h3>
        </motion.div>

        {/* Net Worth */}
        <motion.div variants={cardVariants} className="glass-card p-5 relative overflow-hidden group border-2 border-indigo-100 bg-indigo-50/50 xl:col-span-1">
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-indigo-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="flex items-center gap-2 relative z-10 mb-2">
            <CircleDollarSign className="w-5 h-5 text-indigo-600" />
            <p className="text-indigo-800 font-semibold text-sm md:text-base">Total Net Worth</p>
          </div>
          <h3 className="text-xl md:text-3xl font-extrabold text-indigo-600 relative z-10 truncate" title={`₹${netWorth.toLocaleString()}`}>
            ₹{netWorth >= 1000000 ? (netWorth/1000000).toFixed(1)+'M' : netWorth.toLocaleString()}
          </h3>
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wealth Trend */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="glass-card p-6 flex flex-col items-center justify-center bg-white/60 lg:col-span-2"
        >
          <div className="w-full flex justify-between items-center mb-2">
             <h3 className="text-lg font-bold text-slate-700">Wealth Trend</h3>
             <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">6 Months</span>
          </div>
          <WealthChart currentNetWorth={netWorth} />
        </motion.div>

        {/* Expenses Chart Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="glass-card p-6 flex flex-col items-center justify-center bg-white/60"
        >
          <div className="w-full flex justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-slate-700">Top Expenses</h3>
          </div>
          <OverviewChart expenses={expenses} />
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
