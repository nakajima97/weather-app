import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import TemperatureLineChart from './TemperatureLineChart';

const queryClient = new QueryClient();

const mockResponse = {
  lat: 35,
  lon: 135,
  timezone: 'Asia/Tokyo',
  timezone_offset: 32400,
  hourly: [
    {
      dt: 1623402000,
      temp: 295.14,
      feels_like: 295.22,
      pressure: 1017,
      humidity: 70,
      dew_point: 289.42,
      uvi: 0.2,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.27,
      wind_deg: 208,
      wind_gust: 7.71,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623405600,
      temp: 295.07,
      feels_like: 295.17,
      pressure: 1017,
      humidity: 71,
      dew_point: 289.58,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.62,
      wind_deg: 181,
      wind_gust: 10.21,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623409200,
      temp: 295.01,
      feels_like: 295.08,
      pressure: 1017,
      humidity: 70,
      dew_point: 289.3,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.2,
      wind_deg: 183,
      wind_gust: 13.02,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623412800,
      temp: 294.92,
      feels_like: 295.03,
      pressure: 1017,
      humidity: 72,
      dew_point: 289.65,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.6,
      wind_deg: 192,
      wind_gust: 11.92,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623416400,
      temp: 294.79,
      feels_like: 294.92,
      pressure: 1017,
      humidity: 73,
      dew_point: 289.74,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.97,
      wind_deg: 192,
      wind_gust: 10.62,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623420000,
      temp: 294.45,
      feels_like: 294.57,
      pressure: 1017,
      humidity: 74,
      dew_point: 289.63,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 190,
      wind_gust: 9.53,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623423600,
      temp: 294.14,
      feels_like: 294.25,
      pressure: 1017,
      humidity: 75,
      dew_point: 289.12,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.47,
      wind_deg: 196,
      wind_gust: 10.21,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623427200,
      temp: 294.12,
      feels_like: 294.18,
      pressure: 1017,
      humidity: 73,
      dew_point: 288.76,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.79,
      wind_deg: 184,
      wind_gust: 10.52,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623430800,
      temp: 293.99,
      feels_like: 294.01,
      pressure: 1017,
      humidity: 72,
      dew_point: 288.46,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.54,
      wind_deg: 184,
      wind_gust: 10.2,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623434400,
      temp: 293.5,
      feels_like: 293.52,
      pressure: 1017,
      humidity: 74,
      dew_point: 288.26,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.92,
      wind_deg: 188,
      wind_gust: 8.9,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623438000,
      temp: 293.33,
      feels_like: 293.41,
      pressure: 1017,
      humidity: 77,
      dew_point: 288.66,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.4,
      wind_deg: 186,
      wind_gust: 3.9,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623441600,
      temp: 293.01,
      feels_like: 293.14,
      pressure: 1017,
      humidity: 80,
      dew_point: 288.96,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.72,
      wind_deg: 158,
      wind_gust: 1.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.12,
    },
    {
      dt: 1623445200,
      temp: 292.49,
      feels_like: 292.75,
      pressure: 1018,
      humidity: 87,
      dew_point: 289.86,
      uvi: 0.03,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.19,
      wind_deg: 106,
      wind_gust: 0.71,
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
      ],
      pop: 0.28,
      rain: { '1h': 0.25 },
    },
    {
      dt: 1623448800,
      temp: 291.99,
      feels_like: 292.33,
      pressure: 1018,
      humidity: 92,
      dew_point: 290.16,
      uvi: 0.39,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.69,
      wind_deg: 98,
      wind_gust: 1.3,
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
      ],
      pop: 0.36,
      rain: { '1h': 0.25 },
    },
    {
      dt: 1623452400,
      temp: 292.49,
      feels_like: 292.83,
      pressure: 1018,
      humidity: 90,
      dew_point: 290.36,
      uvi: 0.91,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.85,
      wind_deg: 169,
      wind_gust: 1.61,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.32,
    },
    {
      dt: 1623456000,
      temp: 293.63,
      feels_like: 293.93,
      pressure: 1018,
      humidity: 84,
      dew_point: 290.36,
      uvi: 1.62,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.02,
      wind_deg: 201,
      wind_gust: 4.7,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.28,
    },
    {
      dt: 1623459600,
      temp: 295.32,
      feels_like: 295.47,
      pressure: 1018,
      humidity: 72,
      dew_point: 289.8,
      uvi: 4.01,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.66,
      wind_deg: 210,
      wind_gust: 7.7,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.4,
    },
    {
      dt: 1623463200,
      temp: 294.69,
      feels_like: 294.86,
      pressure: 1017,
      humidity: 75,
      dew_point: 289.74,
      uvi: 4.94,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.25,
      wind_deg: 212,
      wind_gust: 8.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.44,
    },
    {
      dt: 1623466800,
      temp: 293.66,
      feels_like: 293.91,
      pressure: 1017,
      humidity: 82,
      dew_point: 290,
      uvi: 5.29,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.85,
      wind_deg: 221,
      wind_gust: 7.4,
      weather: [
        { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
      ],
      pop: 0.48,
      rain: { '1h': 0.19 },
    },
    {
      dt: 1623470400,
      temp: 294.15,
      feels_like: 294.39,
      pressure: 1016,
      humidity: 80,
      dew_point: 290.16,
      uvi: 5.67,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.81,
      wind_deg: 215,
      wind_gust: 7.5,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.52,
    },
    {
      dt: 1623474000,
      temp: 295.81,
      feels_like: 295.99,
      pressure: 1016,
      humidity: 71,
      dew_point: 289.8,
      uvi: 4.6,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.01,
      wind_deg: 216,
      wind_gust: 7.8,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.48,
    },
    {
      dt: 1623477600,
      temp: 296.21,
      feels_like: 296.43,
      pressure: 1016,
      humidity: 71,
      dew_point: 290.26,
      uvi: 3.17,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.02,
      wind_deg: 203,
      wind_gust: 7.3,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.44,
    },
    {
      dt: 1623481200,
      temp: 297.11,
      feels_like: 297.34,
      pressure: 1015,
      humidity: 68,
      dew_point: 290.26,
      uvi: 2.04,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.55,
      wind_deg: 193,
      wind_gust: 6.5,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.08,
    },
    {
      dt: 1623484800,
      temp: 296.54,
      feels_like: 296.81,
      pressure: 1015,
      humidity: 72,
      dew_point: 290.76,
      uvi: 0.87,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.43,
      wind_deg: 196,
      wind_gust: 7.01,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623488400,
      temp: 295.41,
      feels_like: 295.7,
      pressure: 1015,
      humidity: 77,
      dew_point: 290.79,
      uvi: 0.25,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.37,
      wind_deg: 190,
      wind_gust: 6.8,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623492000,
      temp: 294.09,
      feels_like: 294.41,
      pressure: 1016,
      humidity: 83,
      dew_point: 290.66,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.45,
      wind_deg: 193,
      wind_gust: 5.9,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623495600,
      temp: 293.25,
      feels_like: 293.56,
      pressure: 1016,
      humidity: 86,
      dew_point: 290.46,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.17,
      wind_deg: 201,
      wind_gust: 5.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623499200,
      temp: 293.07,
      feels_like: 293.39,
      pressure: 1016,
      humidity: 87,
      dew_point: 290.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.8,
      wind_deg: 209,
      wind_gust: 4.02,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623502800,
      temp: 292.88,
      feels_like: 293.18,
      pressure: 1016,
      humidity: 87,
      dew_point: 290.17,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.7,
      wind_deg: 203,
      wind_gust: 3.42,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623506400,
      temp: 292.92,
      feels_like: 293.2,
      pressure: 1016,
      humidity: 86,
      dew_point: 290.08,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.71,
      wind_deg: 208,
      wind_gust: 3.52,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623510000,
      temp: 292.96,
      feels_like: 293.22,
      pressure: 1015,
      humidity: 85,
      dew_point: 289.86,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.69,
      wind_deg: 205,
      wind_gust: 3.61,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623513600,
      temp: 293.02,
      feels_like: 293.26,
      pressure: 1015,
      humidity: 84,
      dew_point: 289.84,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.57,
      wind_deg: 211,
      wind_gust: 3.33,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623517200,
      temp: 292.97,
      feels_like: 293.23,
      pressure: 1014,
      humidity: 85,
      dew_point: 289.93,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.36,
      wind_deg: 218,
      wind_gust: 2.61,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623520800,
      temp: 293.29,
      feels_like: 293.55,
      pressure: 1014,
      humidity: 84,
      dew_point: 290.06,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.3,
      wind_deg: 202,
      wind_gust: 2.6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623524400,
      temp: 293.03,
      feels_like: 293.32,
      pressure: 1014,
      humidity: 86,
      dew_point: 290.23,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.07,
      wind_deg: 201,
      wind_gust: 1.7,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623528000,
      temp: 293.07,
      feels_like: 293.39,
      pressure: 1014,
      humidity: 87,
      dew_point: 290.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.76,
      wind_deg: 158,
      wind_gust: 1.2,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623531600,
      temp: 293.46,
      feels_like: 293.82,
      pressure: 1014,
      humidity: 87,
      dew_point: 290.76,
      uvi: 0.33,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.89,
      wind_deg: 176,
      wind_gust: 2.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623535200,
      temp: 294.03,
      feels_like: 294.39,
      pressure: 1014,
      humidity: 85,
      dew_point: 290.91,
      uvi: 0.55,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.96,
      wind_deg: 168,
      wind_gust: 2.72,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623538800,
      temp: 294.73,
      feels_like: 295.06,
      pressure: 1014,
      humidity: 81,
      dew_point: 291.01,
      uvi: 1.27,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2,
      wind_deg: 193,
      wind_gust: 4.13,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623542400,
      temp: 295.39,
      feels_like: 295.73,
      pressure: 1014,
      humidity: 79,
      dew_point: 291.16,
      uvi: 2.24,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.26,
      wind_deg: 198,
      wind_gust: 3.82,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0,
    },
    {
      dt: 1623546000,
      temp: 296.52,
      feels_like: 296.87,
      pressure: 1013,
      humidity: 75,
      dew_point: 291.46,
      uvi: 3.33,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.14,
      wind_deg: 202,
      wind_gust: 3.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.04,
    },
    {
      dt: 1623549600,
      temp: 297.3,
      feels_like: 297.62,
      pressure: 1013,
      humidity: 71,
      dew_point: 291.36,
      uvi: 4.1,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.39,
      wind_deg: 207,
      wind_gust: 2.9,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.16,
    },
    {
      dt: 1623553200,
      temp: 297.14,
      feels_like: 297.5,
      pressure: 1012,
      humidity: 73,
      dew_point: 291.56,
      uvi: 4.38,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.88,
      wind_deg: 209,
      wind_gust: 3.72,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.2,
    },
    {
      dt: 1623556800,
      temp: 297.69,
      feels_like: 298.05,
      pressure: 1011,
      humidity: 71,
      dew_point: 291.66,
      uvi: 6.5,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.99,
      wind_deg: 212,
      wind_gust: 3.6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.24,
    },
    {
      dt: 1623560400,
      temp: 298.56,
      feels_like: 298.91,
      pressure: 1011,
      humidity: 67,
      dew_point: 291.76,
      uvi: 5.28,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.98,
      wind_deg: 217,
      wind_gust: 3.2,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.24,
    },
    {
      dt: 1623564000,
      temp: 298.15,
      feels_like: 298.51,
      pressure: 1010,
      humidity: 69,
      dew_point: 291.76,
      uvi: 3.65,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.28,
      wind_deg: 219,
      wind_gust: 3.7,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.24,
    },
    {
      dt: 1623567600,
      temp: 298.09,
      feels_like: 298.47,
      pressure: 1010,
      humidity: 70,
      dew_point: 291.96,
      uvi: 1.48,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.58,
      wind_deg: 213,
      wind_gust: 3.4,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.52,
    },
    {
      dt: 1623571200,
      temp: 298.47,
      feels_like: 298.81,
      pressure: 1010,
      humidity: 67,
      dew_point: 291.66,
      uvi: 0.63,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.85,
      wind_deg: 211,
      wind_gust: 3.31,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.52,
    },
  ],
};

export default {
  component: TemperatureLineChart,
  title: 'organisms/TemperatureLineChart',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => {
  const mock = new MockAdapter(axios);

  mock
    .onGet(
      /^https:\/\/api.openweathermap.org\/data\/2.5\/onecall\?lat=\d+(?:\.\d+)?&lon=\d+(?:\.\d+)?&exclude=current,minutely,daily,alerts&appid=.*$/,
    )
    .reply(200, mockResponse);

  return <TemperatureLineChart location={{ latitude: 35, longitude: 135 }} />;
};
