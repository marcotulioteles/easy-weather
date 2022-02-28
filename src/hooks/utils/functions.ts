import { DailyForecastData, ForecastData, HourlyForecastData, LocationData } from "../types"

const mapForecastData = (forecastData: ForecastData) => {
  const mappedValues = {
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

  return mappedValues as ForecastData;
}

const mapLocationData = (locationData: LocationData[]) => {
  const mappedValues = {
    name: locationData[0].name,
    country: locationData[0].country,
    state: locationData[0].state
  }

  return mappedValues as LocationData;
};

export { mapForecastData, mapLocationData }