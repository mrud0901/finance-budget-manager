import { Coffee, Home, ShoppingCart, Zap, Car, BookOpen, MoreHorizontal } from "lucide-react";

const CATEGORIES = {
  housing: { label: "Housing", icon: Home, bg: "bg-blue-100", text: "text-blue-500" },
  food: { label: "Food", icon: Coffee, bg: "bg-orange-100", text: "text-orange-500" },
  shopping: { label: "Shopping", icon: ShoppingCart, bg: "bg-pink-100", text: "text-pink-500" },
  utilities: { label: "Utilities", icon: Zap, bg: "bg-yellow-100", text: "text-yellow-500" },
  transit: { label: "Transit", icon: Car, bg: "bg-slate-200", text: "text-slate-500" },
  education: { label: "Education", icon: BookOpen, bg: "bg-indigo-100", text: "text-indigo-500" },
  other: { label: "Other", icon: MoreHorizontal, bg: "bg-emerald-100", text: "text-emerald-500" },
};

function ExpenseItem({ expense }) {
  const cat = CATEGORIES[expense.category] || CATEGORIES.other;
  const Icon = cat.icon;

  return (
    <li className="flex justify-between items-center p-4 mb-3 bg-white/60 border border-slate-200/60 rounded-xl hover:bg-white/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-full ${cat.bg} flex items-center justify-center ${cat.text} group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800">{expense.title}</span>
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{cat.label}</span>
        </div>
      </div>
      <span className="font-bold text-slate-900 text-lg">₹{expense.amount.toLocaleString()}</span>
    </li>
  );
}

export default ExpenseItem;
