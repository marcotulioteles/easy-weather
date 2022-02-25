import { AxiosResponse } from 'axios';
import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { oneCallWeatherDataAPI, directGeocodingAPI } from '../services/api';

type ForecastsProviderProps = {
  children: ReactNode;
}

interface ForecastData {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    clouds: number;
    wind_speed: number;
    weather: [
      {
        description: string;
        icon: string
      }
    ];
  };
  hourly: [
    {
      dt: number;
      temp: number;
      feels_like: number;
      humidity: number;
      clouds: number;
      wind_speed: number;
      weather: [
        {
          description: string;
          icon: string;
        }
      ]
    }
  ];
  daily: [
    {
      dt: number;
      temp: {
        day: number;
      };
      feels_like: {
        day: number;
      };
      humidity: number;
      wind_speed: number;
      weather: [
        {
          description: string;
          icon: string
        }
      ];
      clouds: number;
    }
  ]
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
        const response = await oneCallWeatherDataAPI
          .get(`onecall?lat=${locationData[0].lat}&lon=${locationData[0].lon}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_APPID}`)
        const forecastData = response.data;

        const dataFormatted = {
          current: {
            temp: forecastData.current.temp,
            feels_like: forecastData.current.feels_like,
            humidity: forecastData.current.humidity,
            clouds: forecastData.current.clouds,
            wind_speed: forecastData.current.wind_speed,
            weather: forecastData.current.weather,
          },
          hourly: forecastData.hourly,
          daily: forecastData.daily
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