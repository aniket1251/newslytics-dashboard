// File: pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { DashboardProvider } from '../context/DashboardContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <DashboardProvider>
        <Component {...pageProps} />
      </DashboardProvider>
    </SessionProvider>
  );
}

export default MyApp;
