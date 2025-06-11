import { useDashboard } from '../context/DashboardContext';
import { signOut } from 'next-auth/react';

type NewsTableProps = {
  articles: any[];
};

export default function NewsTable({ articles }: NewsTableProps) {
  const { payoutRate = 10, setPayoutRate = () => {} } = useDashboard();

  const grouped = articles.reduce((acc: Record<string, number>, article: any) => {
    const author = article.author || 'Unknown';
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const groupedValues: number[] = Object.values(grouped) as number[];
  const totalArticles: number = groupedValues.reduce((sum, c) => sum + c, 0);
  const totalPayout = totalArticles * payoutRate;

  return (
    <div className="overflow-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => signOut()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      <table className="w-full text-left border" id="export-table">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-2">Author</th>
            <th className="p-2">Articles</th>
            <th className="p-2">Payout</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([author, countStr]) => {
            const count = typeof countStr === 'number' ? countStr : parseInt(countStr as string, 10);
            return (
              <tr
                key={author}
                className="border-t odd:bg-gray-50 hover:bg-gray-100 dark:odd:bg-gray-800 dark:hover:bg-gray-700"
              >
                <td className="p-2 font-medium">{author}</td>
                <td className="p-2">{count}</td>
                <td className="p-2">${(count * payoutRate).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-gray-100 dark:bg-gray-700 font-semibold">
          <tr>
            <td className="p-2">Total</td>
            <td className="p-2">{totalArticles}</td>
            <td className="p-2">${totalPayout.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <div className="mt-4 flex items-center gap-2">
        <label className="text-sm">Payout per article:</label>
        <input
          type="number"
          value={payoutRate}
          onChange={(e) => setPayoutRate(+e.target.value)}
          className="border p-1 rounded w-24 bg-white dark:bg-gray-800 text-black dark:text-white"
        />
      </div>
    </div>
  );
}
