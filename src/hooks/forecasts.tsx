import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { weatherDataAPI, directGeocodingAPI } from '../services/api';
import { ForecastData, LocationData } from './types';
import { fetchForecast, mapForecastData, mapLocationData } from './utils/functions';

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
  isEmpty: boolean;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [locationInput, setLocationInput] = useState('');
  const [locationResponse, setLocationResponse] = useState<LocationData>({} as LocationData);
  const [forecast, setForecast] = useState<ForecastData>({} as ForecastData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (locationInput)
      fetchForecast(
        locationInput,
        setLoading,
        setIsEmpty,
        setLocationResponse,
        setForecast,
        setError
      );
  }, [locationInput]);

  return (
    <ForecastsContext.Provider value={
      {
        locationInput,
        locationResponse,
        setLocationInput,
        error,
        forecast,
        loading,
        isEmpty
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