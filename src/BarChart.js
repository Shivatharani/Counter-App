import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ history }) {
  
  const freqMap = history.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  const labels = Object.keys(freqMap);
  const data = {
    labels,
    datasets: [
      {
        label: 'Frequency',
        data: labels.map((label) => freqMap[label]),
        backgroundColor: 'rgba(37, 99, 235, 0.7)'
      }
    ]
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Frequency of Count Values' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return <Bar data={data} options={options} />;
}
