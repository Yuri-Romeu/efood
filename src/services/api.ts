import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Product = {
     id: number;
     price: number;
};

type purchasePayload = {
     products: Product[];

     delivery: {
          receiver: string;
          address: {
               description: string;
               city: string;
               zipCode: string;
               number: string;
               complement: string;
          };
     };
     payment: {
          card: {
               name: string;
               number: string;
               code: number;
               expires: {
                    month: number;
                    year: number;
               };
          };
     };
};

type PurchaseResponse = {
     orderId: string;
};

const api = createApi({
     baseQuery: fetchBaseQuery({
          baseUrl: 'https://ebac-fake-api.vercel.app/api/efood',
     }),
     endpoints: builder => ({
          getRestaurants: builder.query<Pratos[], void>({
               query: () => `restaurantes`,
          }),
          getRestaurant: builder.query<Pratos, string>({
               query: id => `restaurantes/${id}`,
          }),

          purchase: builder.mutation<PurchaseResponse, purchasePayload>({
               query: body => ({
                    url: 'checkout',
                    method: 'POST',
                    body,
               }),
          }),
     }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery, usePurchaseMutation } = api;

export default api;
