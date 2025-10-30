
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CounterChart({ history }) {
  
  const data = {
    labels: history.map((_, i) => i + 1),
    datasets: [
      {
        label: 'Counter History',
        data: history,
        fill: false,
        borderColor: 'rgba(59, 130, 246, 0.8)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Counter History Over Time' }
    },
    scales: {
      x: { title: { display: true, text: 'Change Number' } },
      y: { title: { display: true, text: 'Count Value' }, beginAtZero: true }
    }
  };

  return <Line data={data} options={options} />;
}
