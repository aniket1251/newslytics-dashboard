import { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

type ChartSectionProps = {
  articles: any[];
};

export default function ChartSection({ articles }: ChartSectionProps) {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  const grouped = articles.reduce((acc: Record<string, number>, article: any) => {
    const author = article.author || 'Unknown';
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: 'Articles by Author',
        data: Object.values(grouped),
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#EC4899',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow animate-slide-in-up">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Analytics</h2>
        <select
          className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={chartType}
          onChange={(e) => setChartType(e.target.value as 'bar' | 'line' | 'pie')}
        >
          <option value="bar">Bar</option>
          <option value="line">Line</option>
          <option value="pie">Pie</option>
        </select>
      </div>
      {chartType === 'bar' && <Bar data={data} />}
      {chartType === 'line' && <Line data={data} />}
      {chartType === 'pie' && <Pie data={data} />}
    </div>
  );
}
