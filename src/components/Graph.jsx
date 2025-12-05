import React, {useEffect, useState} from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

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
          label: 'Expense',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2
        }
      ]
    });
  }, [items]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Expense Overview</h2>
      <Chart type="bar" data={chartData} />
    </div>
  );
};

export default Graph;
