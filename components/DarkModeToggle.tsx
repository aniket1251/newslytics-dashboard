import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    dark ? classList.add('dark') : classList.remove('dark');
  }, [dark]);

  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded"
      onClick={() => setDark((prev) => !prev)}
    >
      Toggle Dark Mode
    </button>
  );
}
