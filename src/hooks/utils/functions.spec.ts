import mockAxios from '../../tests/__mocks__/axios';
import { fetchForecast, fetchLocation, fetchOneCallWeatherData } from './functions';

const mockLocationResponse = {
  data: [
    {
      name: "Uberlândia",
      local_names: {
        zh: "烏貝蘭迪亞",
        ru: "Уберландия",
        mk: "Уберландија",
        feature_name: "Uberlandia",
        ko: "우베를란지아",
        la: "Fertilia",
        bg: "Уберландия",
        th: "อูเบร์ลังเดีย",
        sr: "Уберландија",
        ja: "ウベルランジア",
        pt: "Uberlândia",
        ascii: "Uberlandia",
        lt: "Uberlandija",
        en: "Uberlândia",
        ka: "უბერლანდია",
        kk: "Уберландия"
      },
      lat: -18.9188041,
      lon: -48.2767837,
      country: "BR",
      state: "Minas Gerais"
    }
  ],
  status: 200,
  statusText: "OK",
  headers: {
    contentLength: "543",
    contentType: "application/json; charset=utf-8"
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    transformRequest: [
      null
    ],
    transformResponse: [
      null
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*"
    },
    baseURL: "http://api.openweathermap.org/geo/1.0",
    method: "get",
    url: "direct?q=Uberlandia&appid=ddcdb9a0329e7d6fc827511a021e0431"
  },
  request: {}
}

const mockWeatherResponse = {
  data: {
    lat: -18.9188,
    lon: -48.2768,
    timezone: "America/Sao_Paulo",
    timezone_offset: -10800,
    current: {
      dt: 1647519999,
      sunrise: 1647508571,
      sunset: 1647552408,
      temp: 296.7,
      feels_like: 297.15,
      pressure: 1020,
      humidity: 78,
      dew_point: 292.64,
      uvi: 4.31,
      clouds: 75,
      visibility: 10000,
      wind_speed: 6.17,
      wind_deg: 40,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d"
        }
      ]
    },
    hourly: [
      {
        dt: 1647518400,
        temp: 296.7,
        feels_like: 297.15,
        pressure: 1020,
        humidity: 78,
        dew_point: 292.64,
        uvi: 4.31,
        clouds: 75,
        visibility: 10000,
        wind_speed: 4.06,
        wind_deg: 42,
        wind_gust: 7.41,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d"
          }
        ],
        pop: 0.11
      }
    ],
    daily: [
      {
        dt: 1647529200,
        sunrise: 1647508571,
        sunset: 1647552408,
        moonrise: 1647552000,
        moonset: 1647505860,
        moon_phase: 0.48,
        temp: {
          day: 298.51,
          min: 291.72,
          max: 300.24,
          night: 293.09,
          eve: 296.19,
          morn: 293.52
        },
        feels_like: {
          day: 298.9,
          night: 293.49,
          eve: 296.74,
          morn: 293.88
        },
        pressure: 1016,
        humidity: 69,
        dew_point: 292.41,
        wind_speed: 5.7,
        wind_deg: 29,
        wind_gust: 7.72,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d"
          }
        ],
        clouds: 63,
        pop: 0.99,
        rain: 2.56,
        uvi: 12.24
      }
    ]
  },
  status: 200,
  statusText: "OK",
  headers: {
    contentLength: "18139",
    contentType: "application/json; charset=utf-8"
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    transformRequest: [
      null
    ],
    transformResponse: [
      null
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*"
    },
    baseURL: "https://api.openweathermap.org/data/2.5",
    method: "get",
    url: "onecall?lat=-18.9188041&lon=-48.2767837&exclude=minutely,alerts&appid=ddcdb9a0329e7d6fc827511a021e0431"
  },
  request: {}
}

const mockFetchForecastParams = {
  locationInput: 'Uberlandia',
  setLoading: jest.fn(),
  setIsEmpty: jest.fn(),
  setLocationResponse: jest.fn(),
  setForecast: jest.fn(),
  setError: jest.fn()
}

describe('Testing Functions from utils', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should return location response from api', async () => {
    const { locationInput } = mockFetchForecastParams;

    mockAxios.get.mockResolvedValueOnce(mockLocationResponse);

    const result = await fetchLocation(locationInput);

    expect(result).toEqual(mockLocationResponse);
  });

  it('should return weather data from one call api', async () => {
    const locationData = [
      {
        name: 'Uberlândia',
        country: 'BR',
        state: 'Minas Gerais',
        lat: -18.91,
        lon: -48.27
      }
    ];

    mockAxios.get.mockResolvedValueOnce(mockWeatherResponse);

    const result = await fetchOneCallWeatherData(locationData);

    expect(result).toEqual(mockWeatherResponse);
  });
});

