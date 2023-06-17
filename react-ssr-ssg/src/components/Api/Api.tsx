import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWines } from '../interface/interface';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sampleapis.com/' }),
  endpoints: (builder) => ({
    getWines: builder.query<IWines[], string>({
      query: (search) => ({
        url: !search ? 'wines/port/?_limit=40' : 'wines/port/?_limit=40&wine=' + search,
      }),
      transformResponse: (response: IWines[] | null) => response ?? [],
    }),
    getWinesDetails: builder.query<IWines, number>({
      query: (id) => ({
        url: `wines/port/${id}`,
      }),
    }),
  }),
});

export const { useGetWinesQuery, useGetWinesDetailsQuery } = productApi;
