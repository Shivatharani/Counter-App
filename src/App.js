import React from 'react';
import Counter from './Counter';
import Dashboard from './Dashboard';
import { CounterProvider } from './CounterContext';
import './style.css';

function App() {
  return (
    <CounterProvider>
      <div className="flex min-h-screen p-6 gap-6 bg-gradient-to-b from-blue-600 to-blue-800">
        
        <div className="w-1/3 flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-white">COUNTER APP</h1>
          <Counter />
        </div>

        
        <div className="flex-1 bg-white/90 rounded-xl p-6 shadow-xl overflow-auto flex flex-col">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">DASHBOARD</h1>
          <Dashboard />
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
