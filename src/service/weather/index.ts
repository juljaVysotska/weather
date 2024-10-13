import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrentWeather, Forecast } from './type';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_WEATHER_API }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<CurrentWeather, { query: string; }>({
            query: ({ query }) => ({
                url: `/current.json?key=${process.env.REACT_APP_API_KEY}&q=${query}`,
                method: 'GET'
            }),
        }),
        getWeatherForecast: builder.query<Forecast, { query: string; }>({
            query: ({ query }) => ({
                url: `/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${query}&days=5`,
                method: 'GET'
            }),
        }),
    }),
});