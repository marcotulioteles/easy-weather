import axios from 'axios';

export const currentWeatherData = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
});

export const directGeocoding = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0'
});