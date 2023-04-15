import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWines } from '../interface/interface';
import type { IResponseWinesApi } from '../interface/interface';

export const BASE_URL = 'https://api.sampleapis.com/';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getWines: builder.query<IWines[], string>({
      query: (search) => ({
        url: 'wines/?winery=Toro Albalá',
        params: { q: search },
      }),
      transformResponse: (response: IResponseWinesApi) => response.products ?? [],
    }),
    getWinesDetails: builder.query<IWines, number>({
      query: (id) => ({
        url: `port/${id}`,
      }),
    }),
  }),
});

export const { useGetWinesQuery, useGetWinesDetailsQuery } = productApi;
