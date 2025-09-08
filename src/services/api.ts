import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pratos } from '../pages/Home';

const api = createApi({
     baseQuery: fetchBaseQuery({
          baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/restaurantes',
     }),
     endpoints: builder => ({
          getRestaurants: builder.query<Pratos[], void>({
               query: () => ``,
          }),
          getRestaurant: builder.query<Pratos, string>({
               query: id => `/${id}`,
          }),
     }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api;

export default api;
