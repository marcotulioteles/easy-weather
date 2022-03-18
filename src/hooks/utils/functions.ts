import React, { SetStateAction } from "react";
import { directGeocodingAPI, weatherDataAPI } from "../../services/api"
import { DailyForecastData, ForecastData, HourlyForecastData, LocationData } from "../types"

const mapForecastData = (forecastData: ForecastData) => {
  const mappedValues = {
    current: {
      temp: forecastData.current.temp,
      feels_like: forecastData.current.feels_like,
      humidity: forecastData.current.humidity,
      clouds: forecastData.current.clouds,
      wind_speed: forecastData.current.wind_speed,
      weather: forecastData.current.weather.map(weather => {
        return {
          description: weather.description,
          icon: weather.icon
        }
      }),
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

const fetchLocation = async (locationInput: string) => {
  const response = await directGeocodingAPI
    .get(`direct?q=${locationInput}&appid=${process.env.NEXT_PUBLIC_APPID}`);

  return response;
};

const fetchOneCallWeatherData = async (locationData: LocationData[]) => {
  const response = await weatherDataAPI
    .get(`onecall?lat=${locationData[0].lat}&lon=${locationData[0].lon}&exclude=minutely,alerts&appid=${process.env.NEXT_PUBLIC_APPID}`);
  return response;
}

const fetchWeatherData = async (locationData: LocationData[]) => {
  const response = await weatherDataAPI
    .get(`weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&appid=${process.env.NEXT_PUBLIC_APPID}`);

  return response;
}

const fetchForecast = async (
  locationInput: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
  setIsEmpty: React.Dispatch<SetStateAction<boolean>>,
  setLocationResponse: React.Dispatch<SetStateAction<LocationData>>,
  setForecast: React.Dispatch<SetStateAction<ForecastData>>,
  setError: React.Dispatch<SetStateAction<boolean>>
) => {
  try {
    setLoading(true);

    const response = await fetchLocation(locationInput);

    const locationData = response.data;
    locationData.length === 0 ? setIsEmpty(true) : setIsEmpty(false);

    setLocationResponse(mapLocationData(locationData));

    try {
      if (locationData) {
        const oneCallWeatherResponse = await fetchOneCallWeatherData(locationData);
        const forecastDataFormatted = mapForecastData(oneCallWeatherResponse.data);
        const currentWeatherResponse = await fetchWeatherData(locationData);

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

export {
  mapForecastData,
  mapLocationData,
  fetchForecast,
  fetchLocation,
  fetchOneCallWeatherData,
  fetchWeatherData
}