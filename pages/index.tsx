// ============================
// File: pages/index.tsx
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      {status === 'loading' ? (
        <p className="text-gray-600 dark:text-gray-300">Loading...</p>
      ) : session ? (
        <button
          onClick={() => signOut()}
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded shadow-lg transition duration-200"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded shadow-lg transition duration-200"
        >
          Sign in with GitHub
        </button>
      )}
    </div>
  );
}
