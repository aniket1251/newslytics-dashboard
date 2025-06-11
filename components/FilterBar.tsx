import { useState } from 'react';

export default function FilterBar({ onFilter }: { onFilter: (filters: any) => void }) {
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const applyFilters = () => {
    onFilter({ author, type, startDate, endDate });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col md:flex-row gap-4 mb-6 flex-wrap">
      <input
        placeholder="Author"
        className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>
      <div className="flex flex-col">
        <label htmlFor="start-date" className="text-sm text-gray-700 dark:text-gray-300">Start Date</label>
        <input
          id="start-date"
          type="date"
          className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="end-date" className="text-sm text-gray-700 dark:text-gray-300">End Date</label>
        <input
          id="end-date"
          type="date"
          className="p-2 border rounded bg-white dark:bg-gray-800 text-black dark:text-white"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          min={startDate}
        />
      </div>
      <button
        onClick={applyFilters}
        className="self-end md:self-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
}
