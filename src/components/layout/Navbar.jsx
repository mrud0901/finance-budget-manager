function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="glass-card sticky top-0 z-50 mx-4 mt-4 px-4 py-4 flex flex-col md:flex-row justify-between items-center rounded-2xl border-b border-white/40 gap-4 md:gap-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
          FF
        </div>
        <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Finance Friendly 
        </h1>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-sm font-bold text-slate-500 flex-wrap justify-center w-full md:w-auto">
        <span 
          onClick={() => setActiveTab('overview')}
          className={`relative group cursor-pointer transition-colors ${activeTab === 'overview' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        >
          Dashboard
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all ${activeTab === 'overview' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </span>
        <span 
          onClick={() => setActiveTab('budget')}
          className={`relative group cursor-pointer transition-colors ${activeTab === 'budget' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        >
          Budget
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all ${activeTab === 'budget' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </span>
        <span 
          onClick={() => setActiveTab('portfolio')}
          className={`relative group cursor-pointer transition-colors ${activeTab === 'portfolio' ? 'text-indigo-600' : 'hover:text-indigo-600'}`}
        >
          Portfolio
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-600 transition-all ${activeTab === 'portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
