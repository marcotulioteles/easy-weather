import axios from 'axios';

export const weatherDataAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const directGeocodingAPI = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0'
});