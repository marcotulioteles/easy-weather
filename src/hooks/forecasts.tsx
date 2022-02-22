import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { currentWeatherData, directGeocoding } from '../services/api';

type ForecastsProviderProps = {
  children: ReactNode;
}

interface ForecastContextProps {
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

const APPID = 'ddcdb9a0329e7d6fc827511a021e0431';

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState();

  async function fetchForecast(location: string) {
    try {
      const response = await directGeocoding.get(`direct?q=${location}&appid=${APPID}`);
      const data = response.data;

      if (data) {
        const response = await currentWeatherData.get(`weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APPID}`)
        const forecastData = response.data;

        setForecast(forecastData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (location) fetchForecast(location);
  }, [location]);

  useEffect(() => {
    console.log('FORECAST: ', forecast);
  }, [forecast]);

  return (
    <ForecastsContext.Provider value={{ location, setLocation }}>
      {children}
    </ForecastsContext.Provider>
  );
};

function useGetForecasts() {
  const context = useContext(ForecastsContext);

  return context;
}

export { ForecastsProvider, useGetForecasts };