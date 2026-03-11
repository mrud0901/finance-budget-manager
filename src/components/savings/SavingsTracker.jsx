import { useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function SavingsTracker({ onSave, currentSavings = 0 }) {
  const [amount, setAmount] = useState("");
  const currentGoal = 150000; // Example goal for a MacBook Pro

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;

    onSave(Number(amount));
    setAmount("");
  }

  const percentage = Math.min(100, Math.round((currentSavings / currentGoal) * 100));

  return (
    <div className="w-full">
      
      {/* Visual Goal Ring */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 p-4 bg-white/50 rounded-2xl border border-slate-200/50">
        <div className="w-24 h-24 shrink-0 transition-transform duration-500 hover:scale-110 drop-shadow-md">
          <CircularProgressbar 
            value={percentage} 
            text={`${percentage}%`} 
            styles={buildStyles({
              textColor: '#4f46e5',
              pathColor: `rgba(79, 70, 229, ${percentage / 100})`,
              trailColor: '#e2e8f0',
              pathTransitionDuration: 1.5,
              textSize: '24px'
            })}
          />
        </div>
        
        <div className="flex flex-col text-center sm:text-left">
          <h3 className="font-bold text-slate-800 text-lg">Goal: MacBook Pro M3</h3>
          <p className="text-sm text-slate-500 mb-2">Keep saving to hit your target!</p>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-semibold text-indigo-600">₹{currentSavings.toLocaleString()}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600 font-medium">₹{currentGoal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="number"
          placeholder="Add savings..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="glass-input p-3 w-full sm:flex-1 text-slate-700 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="btn-primary px-6 py-3 w-full sm:w-auto"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default SavingsTracker;
