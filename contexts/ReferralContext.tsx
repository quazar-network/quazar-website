import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface ReferralContextType {
  referralCode: string | null;
  referralLink: string | null;
}

const ReferralContext = createContext<ReferralContextType>({
  referralCode: null,
  referralLink: null,
});

export const useReferral = () => useContext(ReferralContext);

interface ReferralProviderProps {
  children: ReactNode;
}

export const ReferralProvider: React.FC<ReferralProviderProps> = ({ children }) => {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const aParam = searchParams.get('a');
    if (aParam) {
      setReferralCode(aParam);
    }
  }, [location.search]);

  const referralLink = referralCode ? `https://app.taurum.ai/register/${referralCode}` : null;

  return (
    <ReferralContext.Provider value={{ referralCode, referralLink }}>
      {children}
    </ReferralContext.Provider>
  );
};
