import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { currentWeatherData, directGeocoding } from '../services/api';

type ForecastsProviderProps = {
  children: ReactNode;
}

interface ForecastData {
  weather: {
    description: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  city: string;
  country: string;
}

interface ForecastContextProps {
  location: string;
  setLocation: React.Dispatch<SetStateAction<string>>;
  error: boolean;
  forecast: ForecastData;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState<ForecastData>({} as ForecastData);
  const [error, setError] = useState(false);

  async function fetchForecast(location: string) {
    try {
      const response = await directGeocoding.get(`direct?q=${location}&appid=${process.env.NEXT_PUBLIC_APPID}`);
      const data = response.data;

      if (data) {
        const response = await currentWeatherData.get(`weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${process.env.NEXT_PUBLIC_APPID}`)
        const forecastData = response.data;

        const dataFormatted = {
          weather: {
            description: forecastData.weather[0].description,
          },
          main: {
            temp: forecastData.main.temp,
            humidity: forecastData.main.humidity
          },
          wind: {
            speed: forecastData.wind.speed
          },
          clouds: {
            all: forecastData.clouds.all
          },
          city: forecastData.name,
          country: forecastData.sys.country
        }

        setForecast(dataFormatted);
      }
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    if (location) fetchForecast(location);
  }, [location]);

  return (
    <ForecastsContext.Provider value={{ location, setLocation, error, forecast }}>
      {children}
    </ForecastsContext.Provider>
  );
};

function useGetForecasts() {
  const context = useContext(ForecastsContext);

  return context;
}

export { ForecastsProvider, useGetForecasts };