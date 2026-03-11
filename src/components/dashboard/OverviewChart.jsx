import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const CATEGORY_COLORS = {
  housing: "#3b82f6", // blue
  food: "#f97316", // orange
  shopping: "#ec4899", // pink
  utilities: "#eab308", // yellow
  transit: "#64748b", // slate
  education: "#6366f1", // indigo
  other: "#10b981", // emerald
};

const CATEGORY_LABELS = {
  housing: "Housing",
  food: "Food",
  shopping: "Shopping",
  utilities: "Utilities",
  transit: "Transit",
  education: "Education",
  other: "Other",
};

function OverviewChart({ expenses }) {
  // Aggregate expenses by category for the pie chart
  const aggregatedData = expenses.reduce((acc, exp) => {
    const cat = exp.category || "other";
    if (!acc[cat]) {
      acc[cat] = 0;
    }
    acc[cat] += exp.amount;
    return acc;
  }, {});

  const data = Object.keys(aggregatedData).map((cat) => ({
    name: CATEGORY_LABELS[cat] || "Other",
    value: aggregatedData[cat],
    color: CATEGORY_COLORS[cat] || CATEGORY_COLORS.other,
  })).sort((a, b) => b.value - a.value); // Sort to show largest slices first

  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-48 bg-white/40 rounded-xl border border-dashed border-slate-300 w-full mt-4">
        <p className="text-slate-500 font-medium">Add expenses to see categories</p>
      </div>
    );
  }

  return (
    <div className="h-48 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={75}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            formatter={(value) => [`₹${value.toLocaleString()}`, 'Total Spent']}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OverviewChart;
