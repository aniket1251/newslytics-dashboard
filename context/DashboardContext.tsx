import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const DashboardContext = createContext<any>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [articles, setArticles] = useState([]);
  const [payoutRate, setPayoutRate] = useState(10);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('payoutRate');
      if (stored) setPayoutRate(+stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('payoutRate', payoutRate.toString());
    }
  }, [payoutRate]);

  return (
    <DashboardContext.Provider value={{ articles, setArticles, payoutRate, setPayoutRate }}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);
