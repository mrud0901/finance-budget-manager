import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function WealthChart({ currentNetWorth }) {
  // Generate some realistic-looking mock history that logically leads to the current net worth
  const data = [
    { name: 'Jan', value: Math.max(0, currentNetWorth * 0.6) },
    { name: 'Feb', value: Math.max(0, currentNetWorth * 0.7) },
    { name: 'Mar', value: Math.max(0, currentNetWorth * 0.65) },
    { name: 'Apr', value: Math.max(0, currentNetWorth * 0.85) },
    { name: 'May', value: Math.max(0, currentNetWorth * 0.95) },
    { name: 'Jun', value: currentNetWorth },
  ];

  if (currentNetWorth === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-white/40 rounded-xl border border-dashed border-slate-300 w-full mt-4">
        <p className="text-slate-500 font-medium">Add income and assets to see wealth trend</p>
      </div>
    );
  }

  return (
    <div className="h-64 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(val) => `₹${val>=1000 ? (val/1000).toFixed(0)+'k' : val}`} />
          <Tooltip 
            contentStyle={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)' }}
            formatter={(value) => [`₹${value.toLocaleString()}`, 'Net Worth']}
          />
          <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorNetWorth)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WealthChart;
