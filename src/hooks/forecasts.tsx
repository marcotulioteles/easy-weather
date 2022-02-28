import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { oneCallWeatherDataAPI, directGeocodingAPI } from '../services/api';
import { ForecastData, LocationData } from './types';
import { mapForecastData, mapLocationData } from './utils/functions';

type ForecastsProviderProps = {
  children: ReactNode;
}

interface ForecastContextProps {
  locationInput: string;
  locationResponse: LocationData;
  setLocationInput: React.Dispatch<SetStateAction<string>>;
  error: boolean;
  forecast: ForecastData;
  loading: boolean;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [locationInput, setLocationInput] = useState('');
  const [locationResponse, setLocationResponse] = useState<LocationData>({} as LocationData);
  const [forecast, setForecast] = useState<ForecastData>({} as ForecastData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchForecast(locationInput: string) {
    try {
      setLoading(true);

      const response = await directGeocodingAPI
        .get(`direct?q=${locationInput}&appid=${process.env.NEXT_PUBLIC_APPID}`);
      const locationData = response.data;

      setLocationResponse(mapLocationData(locationData));

      if (locationData) {
        const response = await oneCallWeatherDataAPI
          .get(`onecall?lat=${locationData[0].lat}&lon=${locationData[0].lon}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_APPID}`)
        const forecastData = response.data;

        setForecast(mapForecastData(forecastData));
        setLoading(false);
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
        setLocationInput,
        error,
        forecast,
        loading
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