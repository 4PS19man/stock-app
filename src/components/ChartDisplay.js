import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import './ChartDisplay.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function ChartDisplay({ data }) {
  const chartData = {
    labels: data.map(d => d.index_date),
    datasets: [
      {
        label: 'Closing Value',
        data: data.map(d => parseFloat(d.closing_index_value)),
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.2)',
        tension: 0.3,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      x: {
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        beginAtZero: false,
      }
    }
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartDisplay;
