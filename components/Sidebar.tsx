export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 h-full fixed top-0 left-0 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 shadow-md p-6">
      <div className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 mb-6">Newslytics</div>
      <nav className="space-y-4">
        <a href="/dashboard" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Dashboard</a>
        <a href="#" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Analytics</a>
        <a href="#" className="block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Settings</a>
      </nav>
    </aside>
  );
}
