import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWines } from '../interface/interface';
import type { IResponseWinesApi } from '../interface/interface';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sampleapis.com/' }),
  endpoints: (builder) => ({
    getWines: builder.query<IWines[], string>({
      query: (search) => ({
        url: 'wines/port/?winery=Toro Albalá',
        params: { q: !search ? search : '&wine=' + search },
      }),
      transformResponse: (response: IResponseWinesApi) => response.products ?? [],
    }),
    getWinesDetails: builder.query<IWines, number>({
      query: (id) => ({
        url: `wines/port/${id}`,
      }),
    }),
  }),
});

export const { useGetWinesQuery, useGetWinesDetailsQuery } = productApi;
