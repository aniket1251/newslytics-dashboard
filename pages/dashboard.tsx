// File: pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { fetchNews } from '../utils/fetchNews';
import { useDashboard } from '../context/DashboardContext';
import NewsTable from '../components/NewsTable';
import FilterBar from '../components/FilterBar';
import ChartSection from '../components/ChartSection';
import ExportButtons from '../components/ExportButtons';
import DarkModeToggle from '../components/DarkModeToggle';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

export default function Dashboard() {
  const { data: session } = useSession();
  const { articles, setArticles } = useDashboard();
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      fetchNews()
        .then((data) => {
          setArticles(data);
          setFilteredArticles(data);
        })
        .finally(() => setLoading(false));
    }
  }, [session]);

  const handleFilter = ({ author, type, startDate, endDate }: any) => {
    const filtered = articles.filter((article: any) => {
      const articleDate = new Date(article.publishedAt);
      return (
        (!author || (article.author || '').toLowerCase().includes(author.toLowerCase())) &&
        (!type || (article.type || 'news').toLowerCase() === type.toLowerCase()) &&
        (!startDate || articleDate >= new Date(startDate)) &&
        (!endDate || articleDate <= new Date(endDate))
      );
    });
    setFilteredArticles(filtered);
  };

  if (!session) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <button onClick={() => signIn()} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Sign in with GitHub
      </button>
    </div>
  );

  return (
    <div className="flex min-h-screen dark:bg-gray-900">
      <Sidebar />
      <main className="ml-0 md:ml-64 flex-1 px-6 py-8 max-w-7xl mx-auto dark:text-white space-y-6">
        {loading && <Loader />}

        <div className="bg-white dark:bg-gray-800 shadow rounded-md p-6 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Newslytics Dashboard</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">Filter Articles</h2>
            <FilterBar onFilter={handleFilter} />
            <ExportButtons />
          </div>

          <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow animate-slide-in-up">
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <ChartSection articles={filteredArticles} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow animate-slide-in-up">
          <h2 className="text-xl font-semibold mb-4">Payout Details</h2>
          <NewsTable articles={filteredArticles} />
        </div>
      </main>
      <DarkModeToggle />
    </div>
  );
}
