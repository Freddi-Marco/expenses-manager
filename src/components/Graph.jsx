import React, {useEffect, useState} from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { FiBarChart2 } from 'react-icons/fi';

const Graph = ({ items }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const safeItems = Array.isArray(items) ? items : [];
    const labels = safeItems.map(item => item.name);
    const data = safeItems.map(item => item.price);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Spese',
          data,
          backgroundColor: '#000',
          borderColor: '#000',
          borderWidth: 2,
          hoverBackgroundColor: '#222',
        }
      ]
    });
  }, [items]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2 gap-2">
        <FiBarChart2 className="text-black text-2xl" />
        <h2 className="text-2xl font-extrabold text-black tracking-tight font-inter uppercase">Panoramica Spese</h2>
      </div>
      <Chart type="bar" data={chartData} options={{
        plugins: {
          legend: {
            labels: {
              font: { family: 'Inter', size: 16, weight: 'bold' },
              color: '#000',
            }
          }
        },
        scales: {
          x: {
            ticks: { font: { family: 'Inter', size: 14 }, color: '#000' }
          },
          y: {
            ticks: { font: { family: 'Inter', size: 14 }, color: '#000' }
          }
        }
      }} />
    </div>
  );
};

export default Graph;
