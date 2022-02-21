import { useContext, useEffect, createContext, ReactNode } from 'react';

type ForecastsProviderProps = {
  children: ReactNode;
}

export const ForecastsContext = createContext({});

function ForecastsProvider({ children }: ForecastsProviderProps) {
  return (
    <ForecastsContext.Provider value={{}}>
      {children}
    </ForecastsContext.Provider>
  );
};

function useGetForecasts() {
  const context = useContext(ForecastsContext);

  return context;
}

export { ForecastsProvider, useGetForecasts };