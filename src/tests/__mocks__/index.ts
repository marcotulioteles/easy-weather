import { ForecastData } from "../../hooks/types";

export const mockedForecastResponse = {
  current: {
    temp: 295.7,
    min_temp: 295.7,
    max_temp: 295.7,
    feels_like: 295.79,
    humidity: 68,
    clouds: 0,
    wind_speed: 1.54,
    weather: [
      {
        description: "clear sky",
        icon: "01d"
      }
    ],
  },
  hourly: [
    {
      dt: 1646395200,
      temp: 295.89,
      feels_like: 296,
      humidity: 68,
      clouds: 1,
      wind_speed: 2.37,
      weather: [{
        description: "clear sky",
        icon: "01d"
      }]
    },
    {
      dt: 1646398800,
      temp: 295.7,
      feels_like: 295.79,
      humidity: 68,
      clouds: 0,
      wind_speed: 3.23,
      weather: [
        {
          description: "clear sky",
          icon: "01d"
        }
      ]
    },
    {
      dt: 1646402400,
      temp: 296.49,
      feels_like: 296.6,
      humidity: 66,
      clouds: 2,
      wind_speed: 3.98,
      weather: [
        {
          description: "clear sky",
          icon: "01d"
        }
      ]
    }
  ],
  daily: [
    {
      dt: 1646406000,
      temp: {
        min: 291.07,
        max: 301.04,
      },
      feels_like: {
        day: 297.72,
      },
      humidity: 62,
      clouds: 4,
      wind_speed: 3.98,
      weather: [
        {
          description: "light rain",
          icon: "10d"
        }
      ]
    },
    {
      dt: 1646492400,
      temp: {
        min: 291.6,
        max: 300.02,
      },
      feels_like: {
        day: 300.91,
      },
      humidity: 61,
      clouds: 0,
      wind_speed: 3.53,
      weather: [
        {
          description: "moderate rain",
          icon: "10d"
        }
      ]
    }
  ]
} as ForecastData;

export const mockedLocationResponse = {
  name: 'City',
  country: 'Country',
  state: 'State'
}