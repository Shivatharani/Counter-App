// Counter.js
import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import logo from './logo.svg';
import { useCounter } from './CounterContext';

function Counter() {
  const { state, dispatch } = useCounter();
  const { count, history } = state;
  const [bump, setBump] = useState(false);

  useEffect(() => {
    document.title = `Count: ${count}`;
    setBump(true);
    const t = setTimeout(() => setBump(false), 180);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="w-full flex flex-col items-center justify-start py-3 lg:py-6">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white/95 backdrop-blur border-white/30 shadow-xl">
        <CardHeader className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center">
            <CardTitle className="mr-3 tracking-wide">COUNTER</CardTitle>
            <img src={logo} alt="logo" className="h-10 w-10 lg:h-12 lg:w-12 opacity-90" />
          </div>
          <CardDescription className="text-slate-500 text-center lg:text-left">Tap the buttons to change the count</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-5 lg:gap-8 py-4 lg:py-8">
            <div
              className={
                'relative inline-flex items-center justify-center rounded-2xl px-6 py-4 sm:px-8 sm:py-5 ' +
                'bg-gradient-to-b from-blue-50 to-blue-100 ring-2 ring-blue-300 shadow-inner ' +
                'transition-transform duration-150 ' +
                (bump ? 'scale-110' : 'scale-100')
              }
              aria-live="polite"
            >
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
                {count}
              </span>
              <span className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_50px_-15px_rgba(59,130,246,0.8)]" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button onClick={() => dispatch({ type: 'increment' })} className="gap-2">
                <Plus className="h-4 w-4" /> Increment
              </Button>
              <Button variant="secondary" onClick={() => dispatch({ type: 'decrement' })} className="gap-2">
                <Minus className="h-4 w-4" /> Decrement
              </Button>
              <Button variant="outline" onClick={() => dispatch({ type: 'reset' })} className="gap-2">
                <RotateCcw className="h-4 w-4" /> Reset
              </Button>
            </div>
            <div className="w-full max-w-xs sm:max-w-md max-h-32 sm:max-h-40 overflow-y-auto mt-4">
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-blue-700">History</h3>
              <ul className="list-disc list-inside text-blue-900 text-sm">
                {history.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Counter;
