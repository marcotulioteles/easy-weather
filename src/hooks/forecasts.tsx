import { useContext, useEffect, createContext, ReactNode, useState, SetStateAction } from 'react';
import { oneCallWeatherDataAPI, directGeocodingAPI } from '../services/api';

type ForecastsProviderProps = {
  children: ReactNode;
}

type HourlyForecastData = {
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

type DailyForecastData = {
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

type CurrentForecastData = {
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
}

interface ForecastData {
  current: CurrentForecastData;
  hourly: HourlyForecastData[];
  daily: DailyForecastData[];
}

interface LocationDataResponse {
  name: string;
  country: string;
  state: string;
}

interface ForecastContextProps {
  locationInput: string;
  locationResponse: LocationDataResponse;
  setLocationInput: React.Dispatch<SetStateAction<string>>;
  error: boolean;
  forecast: ForecastData;
  loading: boolean;
}

export const ForecastsContext = createContext({} as ForecastContextProps);

function ForecastsProvider({ children }: ForecastsProviderProps) {
  const [locationInput, setLocationInput] = useState('');
  const [locationResponse, setLocationResponse] = useState<LocationDataResponse>({} as LocationDataResponse);
  const [forecast, setForecast] = useState<ForecastData>({} as ForecastData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchForecast(locationInput: string) {
    try {
      setLoading(true);

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
          hourly: forecastData.hourly.map((hour: HourlyForecastData) => {
            return {
              dt: hour.dt,
              temp: hour.temp,
              feels_like: hour.feels_like,
              humidity: hour.humidity,
              clouds: hour.clouds,
              wind_speed: hour.wind_speed,
              weather: hour.weather.map(weather => {
                return {
                  description: weather.description,
                  icon: weather.icon
                }
              })
            }
          }),
          daily: forecastData.daily.map((day: DailyForecastData) => {
            return {
              dt: day.dt,
              temp: day.temp,
              feels_like: day.feels_like,
              humidity: day.humidity,
              clouds: day.clouds,
              wind_speed: day.wind_speed,
              weather: day.weather.map(weather => {
                return {
                  description: weather.description,
                  icon: weather.icon
                }
              })
            }
          })
        }

        setForecast(dataFormatted);
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