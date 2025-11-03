// Dashboard.js
import React from 'react';
import { Card, CardTitle, CardContent } from './components/ui/card';
import CounterChart from './CounterChart';
import BarChart from './BarChart'; 
import { useCounter } from './CounterContext';

function KPI({ title, value }) {
  return (
    <Card className="p-3 sm:p-4 text-center shadow-md">
      <CardTitle className="text-base sm:text-lg font-semibold">{title}</CardTitle>
      <p className="mt-1 sm:mt-2 text-2xl sm:text-3xl font-bold text-blue-700">{value}</p>
    </Card>
  );
}

export default function Dashboard() {
  const { state } = useCounter();
  const { count, history } = state;

  const maxCount = history.length ? Math.max(...history) : 0;
  const minCount = history.length ? Math.min(...history) : 0;
  const totalChanges = history.length;

  return (
    <div className="space-y-5 sm:space-y-8">

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        <KPI title="Current Count" value={count} />
        <KPI title="Max Count" value={maxCount} />
        <KPI title="Total Changes" value={totalChanges} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
        <Card>
          <CardTitle className="text-base sm:text-lg">Counter History (Line Chart)</CardTitle>
          <CardContent>
            <CounterChart history={history} />
          </CardContent>
        </Card>
        <Card>
          <CardTitle className="text-base sm:text-lg">Count Frequency (Bar Chart)</CardTitle>
          <CardContent>
            <BarChart history={history} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
