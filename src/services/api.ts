import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ResourceListResponse} from '../types/responses';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://www.dnd5eapi.co/api/'}),
  tagTypes: ['ResourceList'],
  endpoints: builder => ({
    getEndpointResource: builder.query<ResourceListResponse, string>({
      query: str => `/${str}/`,
      providesTags: (result, error, str) => [{type: 'ResourceList', id: str}],
    }),
  }),
});

export const {useGetEndpointResourceQuery} = api;
