import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AdminContext from './AdminContext.interface';
import createAdminLoggedCookie from '../../utils/createAdminLoggedCookie';
import checkAdminLoggedCookie from '../../utils/checkAdminLoggedCookie';

const AppContext = createContext<AdminContext>({} as AdminContext);

type Props = { children: ReactNode };

export function ContextAppWrapper({ children }: Props) {
  const [ isAdmin, setIsAdmin ] = useState<boolean>(false);

  const createAndSet = (): void => {
    createAdminLoggedCookie();
    setIsAdmin(true);
  };

  useEffect(() => {
    if(checkAdminLoggedCookie())
      setIsAdmin(true);
  }, []);

  return (
    <AppContext.Provider value={{ isAdmin, createAndSet }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useAdminCookieContext() {
  return useContext(AppContext);
}
