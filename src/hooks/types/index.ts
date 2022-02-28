export type HourlyForecastData = {
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

export type DailyForecastData = {
  dt: number;
  temp: {
    min: number;
    max: number;
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

export type CurrentForecastData = {
  temp: number;
  min_temp: number;
  max_temp: number;
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

export interface ForecastData {
  current: CurrentForecastData;
  hourly: HourlyForecastData[];
  daily: DailyForecastData[];
}

export interface LocationData {
  name: string;
  country: string;
  state: string;
}