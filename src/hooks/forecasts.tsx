import { AxiosResponse } from 'axios';
import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { currentWeatherDataAPI, directGeocodingAPI } from '../services/api';

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

interface LocationDataResponse {
  name: string;
  country: string;
  state: string;
}

interface ForecastContextProps {
  locationInput: string;
  locationResponse: LocationDataResponse;
  setLocation: React.Dispatch<SetStateAction<string>>;
  error: boolean;
  forecast: ForecastData;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [locationInput, setLocation] = useState('');
  const [locationResponse, setLocationResponse] = useState<LocationDataResponse>({} as LocationDataResponse);
  const [forecast, setLocationInput] = useState<ForecastData>({} as ForecastData);
  const [error, setError] = useState(false);

  async function fetchForecast(locationInput: string) {
    try {
      const response = await directGeocodingAPI
        .get(`direct?q=${locationInput}&appid=${process.env.NEXT_PUBLIC_APPID}`);
      const locationData = response.data;

      const locationFormatted = {
        name: locationData[0].name,
        country: locationData[0].country,
        state: locationData[0].state
      }

      setLocationResponse(locationFormatted);

      if (locationData) {
        const response = await currentWeatherDataAPI
          .get(`weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${process.env.NEXT_PUBLIC_APPID}`)
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

        setLocationInput(dataFormatted);
      }
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    if (locationInput) fetchForecast(locationInput);
  }, [locationInput]);

  return (
    <ForecastsContext.Provider value={
      {
        locationInput,
        locationResponse,
        setLocation,
        error,
        forecast
      }}>
      {children}
    </ForecastsContext.Provider>
  );
};

function useGetForecasts() {
  const context = useContext(ForecastsContext);

  return context;
}

export { ForecastsProvider, useGetForecasts };