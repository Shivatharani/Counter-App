
import React from 'react';
import Counter from './Counter';
import Dashboard from './Dashboard';
import { CounterProvider } from './CounterContext';
import './style.css';

function App() {
  return (
    <CounterProvider>
      <div className="flex flex-col lg:flex-row min-h-screen p-3 lg:p-6 gap-3 lg:gap-6 bg-gradient-to-b from-blue-600 to-blue-800">
        
        <div className="w-full lg:w-1/3 flex flex-col mb-3 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4 text-white text-center">COUNTER APP</h1>
          <Counter />
        </div>
        
        <div className="w-full lg:flex-1 bg-white/90 rounded-xl p-3 lg:p-6 shadow-xl overflow-auto flex flex-col">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-gray-900 text-center">DASHBOARD</h1>
          <Dashboard />
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
