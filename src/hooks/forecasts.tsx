import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { weatherDataAPI, directGeocodingAPI } from '../services/api';
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

  async function fetchForecast(locationInput: string) {
    try {
      setLoading(true);

      const response = await directGeocodingAPI
        .get(`direct?q=${locationInput}&appid=${process.env.NEXT_PUBLIC_APPID}`);

      const locationData = response.data;

      locationData.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

      setLocationResponse(mapLocationData(locationData));

      try {
        if (locationData) {
          const oneCallWeatherResponse = await weatherDataAPI
            .get(`onecall?lat=${locationData[0].lat}&lon=${locationData[0].lon}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_APPID}`)
          const forecastDataFormatted = mapForecastData(oneCallWeatherResponse.data);

          const currentWeatherResponse = await weatherDataAPI
            .get(`weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${process.env.NEXT_PUBLIC_APPID}`)

          setForecast({
            ...forecastDataFormatted,
            current: {
              ...forecastDataFormatted.current,
              min_temp: currentWeatherResponse.data.main.temp_min,
              max_temp: currentWeatherResponse.data.main.temp_max,
            }
          });
          setLoading(false);
        }
      } catch (error) {
        setError(true);
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